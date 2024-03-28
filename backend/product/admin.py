from django.contrib import admin
from .models import Product, Category, Image
# Register your models here.
admin.site.register(Category)


class ImageInline(admin.TabularInline):
    model = Image
    extra = 1

class ProductAdmin(admin.ModelAdmin):
    inlines = [ImageInline]
    list_display = ['id', 'name', 'category', 'price']
    list_filter = ['name', 'category', 'price']

admin.site.register(Product, ProductAdmin)


