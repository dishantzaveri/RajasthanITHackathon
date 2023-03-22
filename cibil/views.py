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
from pandas import json_normalize
import json
import joblib
import random

# reading the model:

@csrf_exempt 
def CibilScore(request):
        if request.method == 'GET':
            sam = {
                  'status' : 'success',
                  'data' : "you are hitting GET request so we can not send you your credit score. Try sending POST request."
            }
            return JsonResponse(sam)
        
        if request.method == 'POST':     
            loaded_model = joblib.load('ml_model/model.h5')
            loaded_scalar = joblib.load('ml_model/scalar.h5')
            data = json.loads(str(request.body, encoding='utf-8'))
            df2 = json_normalize(data['data'])
            df2.to_csv('eval.csv', index=False)
            new_data = pd.read_csv('eval.csv')
            scal_test = loaded_scalar.transform(new_data.values)
            pred_new = loaded_model.predict(scal_test)
            result = str(pred_new[0])
            score = 0 

            if result == '0':
                 score = random.randint(150,500)
            elif result == '1':
                 score = random.randint(500,750)
            elif result == '2':
                 score = random.randint(750,900) 

            sam = {
                  'data' : score
            }
            return JsonResponse(sam)
