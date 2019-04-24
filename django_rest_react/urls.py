from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

from django.contrib import admin
from django.urls import path, include

PREFIX = 'api'

urlpatterns = [
    path('admin/', admin.site.urls),
    path(f'{PREFIX}/user/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path(f'{PREFIX}/user/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', include('custom_webpack_conf_2.urls'))
]
