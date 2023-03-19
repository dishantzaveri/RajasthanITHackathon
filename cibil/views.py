from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework import status,permissions,viewsets
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from rest_framework.generics import GenericAPIView
from .models import *
import pandas as pd
import joblib

# reading the model:

@csrf_exempt 
class CibilScore(APIView):

    # def __init__(self, data):
    #     self.data = data

    def post(self, request):
        print(request)
        data = request.body
        loaded_model = joblib.load('ml_model/model.h5')
        loaded_scalar = joblib.load('ml_model/scalar.h5')
        print(data)
        json_data = pd.read_json(data)
        new_data = json_data.to_csv('eval.csv')
        scal_test = loaded_scalar.transform(new_data)
        pred_new = loaded_model.predict(scal_test)

        return JsonResponse(pred_new)
