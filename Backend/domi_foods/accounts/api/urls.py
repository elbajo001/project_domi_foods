from django.urls import path, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from rest_framework import routers
from .views import(
    UserRestaurantRegister,
    UserRestaurantList,
    UserRestaurantDetail,
    UserRestaurantDelete,
    UserRestaurantUpdate,
    UserLoginAPI,
    ChangePasswordView,
    UserRegisterAPI,
    AdminRegister,
    AdminDetail,
    ClientRegister,
    ClientDetail,
    DeliveryManRegister,
    DeliveryManDetail,
)
from knox import views as knox_views

router = routers.DefaultRouter()
router.register('', UserRestaurantRegister)

router1 = routers.DefaultRouter()
router1.register('',AdminRegister)

router2 = routers.DefaultRouter()
router2.register('',ClientRegister)

router3 = routers.DefaultRouter()
router3.register('',DeliveryManRegister)

"""
Estas son las urls que permite navegar por todo un CRUD de Admin
"""
urlpatterns = [
    path('user_admin_detail/<str:pk>',AdminDetail , name = 'user_admin_detail'),
    path('user_admin_list/',include(router1.urls) , name = 'user_admin_list'),
    path('user_admin_register/',include(router1.urls) , name = 'user_admin_register'),
]

"""
Estas son las urls que permite navegar por todo un CRUD de Client
"""
urlpatterns += [
    path('user_client_detail/<str:pk>',ClientDetail , name = 'user_client_detail'),
    path('user_client_list/',include(router2.urls) , name = 'user_client_list'),
    path('user_client_register/',include(router2.urls) , name = 'user_client_register'),
]

"""
Estas son las urls que permite navegar por todo un CRUD de DeliveryMan
"""
urlpatterns += [
    path('user_deliveryman_detail/<str:pk>',DeliveryManDetail , name = 'user_deliveryman_detail'),
    path('user_deliveryman_list/',include(router3.urls) , name = 'user_deliveryman_list'),
    path('user_deliveryman_register/',include(router3.urls) , name = 'user_deliveryman_register'),
]

"""
Estas son las urls que permite navegar por todo un CRUD de user_restaurant 
y user de django, además esta la gestión de los usuarios.
"""
urlpatterns += [
    path('user_restaurant_update/<str:pk>',UserRestaurantUpdate , name = 'user_restaurant_update'),
    path('user_restaurant_delete/<str:pk>',UserRestaurantDelete , name = 'user_restaurant_delete'),
    path('user_restaurant_detail/<str:pk>',UserRestaurantDetail , name = 'user_restaurant_detail'),
    path('user_restaurant_list/',UserRestaurantList , name = 'user_restaurant_list'),
    path('user_restaurant_register/',include(router.urls) , name = 'user_restaurant_register'),
    path('user_register/', UserRegisterAPI.as_view(), name = 'user_register'),
    path('login/', UserLoginAPI.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('change_password/', ChangePasswordView.as_view(), name='change-password'),
]