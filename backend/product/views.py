from rest_framework import response, status, generics
from .models import Product
from .serializers import ProductSerializer
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404



class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

product_list = ProductListAPIView.as_view()



class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    

product_detail = ProductDetailAPIView.as_view()