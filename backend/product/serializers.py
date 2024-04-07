from .models import Product, Image, Category
from rest_framework import serializers


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['image']

class ProductSerializer(serializers.ModelSerializer):
    owner = serializers.SerializerMethodField()
    images = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ['id','name', 'price', 'owner', 'images']

    def get_owner(self, obj):
        return obj.owner.email
    
    
    def get_images(self, obj):
        try:
            query_set = obj.product_images.all()
            serializer = ImageSerializer(query_set, many=True)
            return serializer.data
        except Image.DoesNotExist:
            return 1


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']