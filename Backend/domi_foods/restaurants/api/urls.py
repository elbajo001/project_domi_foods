from django.urls import path
from .views import *


urlpatterns = [
    # Categories GET, POST
    path('categories/', CategoryList.as_view()),
    # Categories GET, POST, PUT, DELETE
    path('categories/<int:pk>/', CategoryDetail.as_view()),


    # Products GET, POST
    path('products/', ProductList.as_view()),
    # Products GET, POST, PUT, DELETE
    path('products/<int:pk>/', ProductDetail.as_view()),


    # Restaurants GET, POST
    path('restaurants/', RestaurantList.as_view()),
    # Restaurants GET, POST, PUT, DELETE
    path('restaurants/<int:pk>/', RestaurantDetail.as_view()),

    # List all categories by restaurant <rest>
    path('restaurants/<int:rest>/categories/', ListCategoryByRestaurant.as_view()),
    # List all products by restaurant <rest>
    path('restaurants/<int:rest>/products/', ListProductsByRestaurant.as_view()),
    # List all products by restaurant <rest> by category <cat>
    path('restaurants/<int:rest>/category/<int:cat>/products/', ListProductsByRestaurantByCategory.as_view()),
]
