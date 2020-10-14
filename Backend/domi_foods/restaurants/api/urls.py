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
    path('restaurants/<str:pk>/categories/', ListarCategoriasPorRestaurante, name = 'restaurant_categories'),
    #Listar categorias por restaurante
    #path('restaurants/categories/<str:pk>', ListarCategoriasPorRestaurante, name = 'restaurant_categories'),
    # List all products by restaurant <rest>
    path('restaurants/<int:rest>/products/', ListProductsByRestaurant.as_view()),
    # List all products by restaurant <rest> by category <cat>
    path('restaurants/<int:rest>/category/<int:cat>/products/', ListProductsByRestaurantByCategory.as_view()),
    # List all restaurants by admin <admin>
    path('admin/<admin>/restaurants/', ListRestaurantsByAdmin.as_view()),
    # List all categories by admin <cat>
    path('admin/<admin>/restaurant/<rest>/categories/', ListCategoriesByRestaurantByAdmin.as_view()),
    # List all products by admin <rest>
    path('admin/<admin>/restaurant/<rest>/category/<cat>/products/', ListProductsByCategoryByRestaurantByAdmin.as_view()),
]
