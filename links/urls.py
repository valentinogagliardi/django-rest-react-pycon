# links/urls.py

from django.urls import path
from .views import LinkList
PREFIX = 'api'

urlpatterns = [
    path(f'{PREFIX}/link/', LinkList.as_view()),
]