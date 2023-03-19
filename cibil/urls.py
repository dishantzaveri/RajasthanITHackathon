from django.urls import path,include
from . import views

from rest_framework.routers import DefaultRouter

router = DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('score/', views.CibilScore, name='cibil_score'),
]