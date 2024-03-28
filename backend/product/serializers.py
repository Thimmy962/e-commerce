from .models import Product, Image
from rest_framework import serializers


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['image']

class ProductSerializer(serializers.ModelSerializer):
    owner = serializers.SerializerMethodField()
    images = ImageSerializer(many=True, read_only=True)  # Nested serializer for images

    class Meta:
        model = Product
        fields = ['id','name', 'price', 'owner', 'images']

    def get_owner(self, obj):
        return obj.owner.email