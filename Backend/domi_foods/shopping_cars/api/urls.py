from django.urls import path, include
from rest_framework import routers
from .views import(
    OrderRegister,
    OrderList,
)

router = routers.DefaultRouter()
router.register('order_register', OrderRegister)

urlpatterns = [
    path('', include(router.urls),
    path('order_list/<str:pk>', OrderList, name='order_list')
]
