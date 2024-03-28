import uuid
from django.db import models
from account.models import UserAccount

class Category(models.Model):
    name = models.CharField(max_length=15)

    def __str__(self) -> str:
        return self.name.title()


class Product(models.Model):
    id = models.UUIDField(editable=False, unique=True, primary_key=True, default=uuid.uuid4, auto_created=True)
    owner = models.ForeignKey(UserAccount, default=1, on_delete=models.CASCADE, related_name = 'user_products')
    name = models.CharField(max_length=32)
    category = models.ForeignKey(Category, on_delete = models.CASCADE, related_name = 'category_product', default = 1)
    price = models.IntegerField(default=5000)

    def __str__(self):
        return self.name
    

class Image(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name = 'product_images')
    image = models.ImageField(upload_to='product_images/')

    def __str__(self):
        return self.product.name