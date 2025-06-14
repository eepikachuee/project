from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
def hello(request):
    return Response({"message": "Hello from Django backend!"})

@api_view(['GET'])
def root_view(request):
    return Response({"message": "Welcome to the Django backend root!"})