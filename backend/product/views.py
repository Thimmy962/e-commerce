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
            print(request.data)
            data = request.data

            category = data['category']

            category = Category.objects.get(pk = int(category))
        
            serializer = ProductSerializer(data=data)

            if serializer.is_valid():
                serializer.save(owner = request.user, category = category)

                return Response(serializer.data, status=status.HTTP_201_CREATED)
        #     else:
        #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # except Exception as e:
        #     return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


        
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