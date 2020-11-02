from django.urls import path, include
from rest_framework import routers
from .views import(
    OrderRegister,
    OrderList,
)

router = routers.DefaultRouter()
router.register('', OrderRegister)

urlpatterns = [
    path('order_register/',include(router.urls) , name = 'order_register'),
    path('order_list/<str:pk>',OrderList , name = 'order_list')
]
