from rest_framework.generics import ListAPIView
from .serializers import LinkSerializer
from .models import Link
from django.shortcuts import render
from rest_framework import permissions

def index(request):
    return render(request, 'custom_webpack_conf_2/index.html')

class LinkList(ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = LinkSerializer
    queryset = Link.objects.all()

