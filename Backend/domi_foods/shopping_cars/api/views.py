from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics, permissions, status, viewsets
from shopping_cars.models import Order, ShoppingCart
from restaurants.models import Category, Product
from .serializers import (
    OrderSerializer,
    OrderProductSerializer
)


class OrderRegister(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


def all_product(categorias):
    aux_lis = []
    for categoria in categorias:
        productos = Product.objects.filter(category=categoria.id)
        for producto in productos:
            aux_lis.append({'id': producto.id, 'name': producto.name})
    return aux_lis


def search_orders(list_product):
    aux_list = []
    for product in list_product:
        list_ordenes = ShoppingCart.objects.filter(product=product['id'])
        for orden in list_ordenes:
            aux_list.append(
                {'order': orden.id, 'name': product['name'], 'candidad': orden.quantity, 'precio': orden.total_price_product})
    return aux_list


@api_view(['GET'])
def OrderList(request, pk):
    respuesta = {'answer': '! No hay ordenes ¡'}
    category_list = Category.objects.filter(restaurant=pk)
    if len(category_list) != 0:
        list_id_product = all_product(category_list)
        order_list = search_orders(list_id_product)
        if len(order_list) != 0:
            return Response(order_list)
        return Response(respuesta)
    else:
        return Response(respuesta)


# Obtener los registros de order_product asociados a una order <order>

class OrderProductView(viewsets.ModelViewSet):
    queryset = ShoppingCart.objects.all()
    serializer_class = OrderProductSerializer


class OrderProductByOrder(generics.ListAPIView):
    serializer_class = OrderProductSerializer

    def get_queryset(self):
        var_order = self.kwargs['order']
        queryset = ShoppingCart.objects.filter(order_id=var_order)
        return queryset
