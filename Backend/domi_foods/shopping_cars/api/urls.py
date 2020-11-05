from django.urls import path, include
from rest_framework import routers
from .views import(
    OrderRegister,
    OrderList,
    OrderProductView,
)

router = routers.DefaultRouter()
router.register('order_register', OrderRegister)
router.register('order_product', OrderProductView)

urlpatterns = [
    path('', include(router.urls)),
    path('order_list/<str:pk>', OrderList, name='order_list'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
