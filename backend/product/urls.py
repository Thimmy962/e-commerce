from django.urls import path
from . import views

urlpatterns = [
    path('', views.product_list_create),
    path('product/<str:pk>', views.product_detail),
    path('categories/', views.get_category)
]