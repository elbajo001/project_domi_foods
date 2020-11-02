from django.urls import path, include
from .views import(
    OrderList
)

urlpatterns = [
    path('order_list/',OrderList , name = 'order_list')
]
