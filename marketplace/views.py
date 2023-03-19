from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework import status,permissions,viewsets
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from .models import *
from .serializers import *

########################Marketplace part begins####################################

class ItemList(generics.ListCreateAPIView):
    queryset = ItemPost.objects.all()
    serializer_class = ItemPostSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class ItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ItemPost.objects.all()
    serializer_class = ItemPostSerializer
    permission_classes = [permissions.IsAuthenticated]