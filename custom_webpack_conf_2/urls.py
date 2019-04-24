from django.urls import path
from .views import index, LinkList

PREFIX = 'api'

urlpatterns = [
    path('link2/', index),
    path(f'{PREFIX}/link2/', LinkList.as_view()),
]