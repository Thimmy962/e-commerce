from django.core.files.base import ContentFile
from base64 import b64decode
from rest_framework import status, generics, permissions
from rest_framework.decorators import api_view
from .models import Product, Image, Category
from .serializers import ProductSerializer, CategorySerializer
from rest_framework.response import Response 



class CategoryAPIVIew(generics.ListAPIView):
     queryset = Category.objects.all()
     serializer_class = CategorySerializer
     permission_classes = [permissions.AllowAny]

get_category = CategoryAPIVIew.as_view()

    
@api_view(["POST", "GET"])
def product_list_create(request):
    if request.method == 'POST':
        # try:
            data = request.data

            category_id = data.get('category')
            category = Category.objects.get(pk=category_id)
        
            serializer = ProductSerializer(data=data)


            if serializer.is_valid():
                serializer.save(owner=request.user, category=category)

                product = serializer.instance
                # Handle images
                for image_data in data.get("images", []):
                    # Decode base64 image data
                    image_data = b64decode(image_data.split(',')[1])



                    # Save the image to your model
                    # Assuming you have an ImageField in your model named 'image'
                    product_image = Image(product=product)
                    product_image.image.save(f"{product.name}.jpg", ContentFile(image_data))
                    product_image.save()

                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        
    elif request.method == 'GET':
        try:
            products = Product.objects.all()
            serializer = ProductSerializer(products, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    

product_detail = ProductDetailAPIView.as_view()




"""
@api_view(["POST", "GET"])
def product_list_create(request):
    if request.method == 'POST':
        # try:
            data = request.data

            category_id = data.get('category')
            category = Category.objects.get(pk=category_id)
        
            serializer = ProductSerializer(data=data)


            if serializer.is_valid():
                serializer.save(owner=request.user, category=category)

                print(serializer)

                # Handle images
                for image_data in data.get("images", []):
                    # Decode base64 image data
                    image_data = base64.b64decode(image_data.split(',')[1])

                    # Create a file-like object from the decoded image data
                    image_file = io.BytesIO(image_data)

                    # Create an Image object from the file-like object
                    image = Image.open(image_file)

                    # Save the image to your model
                    # Assuming you have an ImageField in your model named 'image'
                    product_image = Image(product=serializer.instance)
                    product_image.image.save(f"{serializer.instance.name}_image.jpg", ContentFile(image_data))
                    product_image.save()

                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
"""