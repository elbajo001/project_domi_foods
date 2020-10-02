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
)
from knox import views as knox_views

router = routers.DefaultRouter()
router.register('', UserRestaurantRegister)

urlpatterns = [
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