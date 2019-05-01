from django.urls import path
from .views import index, LinkList

PREFIX = 'api'
ENDPOINT = 'link2/'
PATH = f'{PREFIX}/{ENDPOINT}'

urlpatterns = [
    path(ENDPOINT, index),
    path(PATH, LinkList.as_view()),
]