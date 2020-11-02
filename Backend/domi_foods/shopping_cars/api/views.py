from rest_framework.response import Response
from rest_framework.decorators import api_view
from shopping_cars.models import Order
from .serializers import (
    OrderSerializer
)

"""
*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *
"""
@api_view(['GET'])
def OrderList(request):
    list_order = Order.objects.all()
    if len(list_order) != 0:
        serializer = OrderSerializer(list_order, many=True)
        return Response(serializer.data)
    else:
        return Response({'answer': '! No hay ordenes ¡'})

"""
*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *
"""
