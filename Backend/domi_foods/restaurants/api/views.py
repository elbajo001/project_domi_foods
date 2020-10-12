from rest_framework import generics
from .serializers import *
from ..models import *


# listar los productos de un restaurante <rest> y una categoria <cat>
class ListProductsByRestaurantByCategory(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        var_rest = self.kwargs['rest']
        var_cat = self.kwargs['cat']
        print(self.kwargs)
        queryset = Product.objects.raw('SELECT * FROM restaurants_product '
                                       'INNER JOIN restaurants_category ON restaurants_product.category_id = restaurants_category.id '
                                       'INNER JOIN restaurants_category_restaurant ON restaurants_category.id = restaurants_category_restaurant.category_id '
                                       'WHERE restaurants_category_restaurant.restaurant_id = %s AND restaurants_category_restaurant.category_id = %s',
                                       [var_rest, var_cat])
        return queryset

# listar los productos de un restaurante <rest>
class ListProductsByRestaurant(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        var_rest = self.kwargs['rest']
        print(self.kwargs)
        queryset = Product.objects.raw('SELECT * FROM restaurants_product '
                                       'INNER JOIN restaurants_category ON restaurants_product.category_id = restaurants_category.id '
                                       'INNER JOIN restaurants_category_restaurant ON restaurants_category.id = restaurants_category_restaurant.category_id '
                                       'WHERE restaurants_category_restaurant.restaurant_id = %s', [var_rest])
        return queryset


# Listar todas las Categorias de un restaurante <rest>
class ListCategoryByRestaurant(generics.ListAPIView):
    serializer_class = CategorySerializer

    def get_queryset(self):
        var_rest = self.kwargs['rest']
        print(self.kwargs)
        queryset = Category.objects.raw('SELECT * FROM restaurants_category '
                                        'INNER JOIN restaurants_category_restaurant ON restaurants_category.id = restaurants_category_restaurant.category_id '
                                        'WHERE restaurants_category_restaurant.restaurant_id = %s', [var_rest])
        return queryset

# listar los restaurantes asociados a un admin <admin>
class ListRestaurantsByAdmin(generics.ListAPIView):
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        var_admin = self.kwargs['admin']
        print(self.kwargs)
        queryset = Restaurant.objects.raw('SELECT * FROM restaurants_restaurant '
                                       'WHERE restaurants_restaurant.id_admin_id = %s',
                                       [var_admin])
        return queryset

# listar las categorías de un restaurante <rest> asociado a un admin <admin>
class ListCategoriesByRestaurantByAdmin(generics.ListAPIView):
    serializer_class = CategorySerializer

    def get_queryset(self):
        var_rest = self.kwargs['rest']
        var_admin = self.kwargs['admin']
        print(self.kwargs)
        queryset = Category.objects.raw('SELECT * FROM restaurants_category '
                                       'INNER JOIN restaurants_category_restaurant ON restaurants_category.id = restaurants_category_restaurant.category_id '
                                       'INNER JOIN restaurants_restaurant ON restaurants_restaurant.id = restaurants_category_restaurant.restaurant_id '
                                       'WHERE restaurants_restaurant.id = %s AND restaurants_restaurant.id_admin_id = %s',
                                       [var_rest, var_admin])
        return queryset

# listar los productos asociadosa a una categoría <cat> de un restaurante <rest> asociado a un admin <admin>
class ListProductsByCategoryByRestaurantByAdmin(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        var_cat = self.kwargs['cat']
        var_rest = self.kwargs['rest']
        var_admin = self.kwargs['admin']
        print(self.kwargs)
        queryset = Product.objects.raw('SELECT * FROM restaurants_product '
                                       'INNER JOIN restaurants_category ON restaurants_category.id = restaurants_product.category_id '
                                       'INNER JOIN restaurants_category_restaurant ON restaurants_category.id = restaurants_category_restaurant.category_id '
                                       'INNER JOIN restaurants_restaurant ON restaurants_restaurant.id = restaurants_category_restaurant.restaurant_id '
                                       'WHERE restaurants_restaurant.id = %s AND restaurants_restaurant.id_admin_id = %s AND restaurants_category.id = %s',
                                       [var_rest, var_admin, var_cat])
        return queryset


# API categories

class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


# API products

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


# API products

class RestaurantList(generics.ListCreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer


class RestaurantDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
