from django.urls import path
from .views import index

PREFIX = 'api'

urlpatterns = [
    path('link1/', index),
]