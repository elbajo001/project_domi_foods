from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register('order_register', OrderRegister)
router.register('order_product', OrderProductView)


urlpatterns = [
    path('', include(router.urls)),
    path('order_list/<str:pk>', OrderList, name='order_list'),
    path('list_order_product/<int:order>',
         OrderProductByOrder.as_view()),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
