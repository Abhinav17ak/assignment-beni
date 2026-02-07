from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# Create your views here.



from .models import Fact
from .serializers import FactSerializer

@api_view(['GET', 'POST'])
def fact_list(request):
    if request.method == 'GET':
        facts = Fact.objects.all()
        serializer = FactSerializer(facts, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def fact_detail(request, id):
    try:
        fact = Fact.objects.get(id=id)
    except Fact.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = FactSerializer(fact)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = FactSerializer(fact, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        fact.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)