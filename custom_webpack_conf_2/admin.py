from django.contrib import admin
from .models import Tag, Link

models = [Tag, Link]

[admin.site.register(model) for model in models]
