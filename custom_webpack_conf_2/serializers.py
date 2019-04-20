from rest_framework import serializers
from .models import Link

class LinkSerializer(serializers.ModelSerializer):
    tags = serializers.StringRelatedField(many=True)

    class Meta:
        model = Link
        fields = '__all__'