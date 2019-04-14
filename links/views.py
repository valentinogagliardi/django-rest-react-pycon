from rest_framework.generics import ListAPIView
from .serializers import LinkSerializer
from .models import Link

class LinkList(ListAPIView):
    serializer_class = LinkSerializer
    queryset = Link.objects.all()
