from .models import Product
from rest_framework import serializers

class ProductSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    class Meta:
        model = Product
        fields = ['id','name', 'price', 'user']

    def get_user(self, obj):
        return obj.owner.email