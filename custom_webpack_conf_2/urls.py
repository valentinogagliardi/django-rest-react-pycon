from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)
from django.urls import path
from .views import index, LinkList

PREFIX = 'api'

urlpatterns = [
    path('link2/', index),
    path(f'{PREFIX}/link2/', LinkList.as_view()),
    path(f'{PREFIX}/user/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path(f'{PREFIX}/user/token/refresh/', TokenRefreshView.as_view(), name='token_refresh')
]