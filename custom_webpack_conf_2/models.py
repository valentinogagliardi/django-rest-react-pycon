from django.db import models

class Tag(models.Model):
    name = models.TextField(max_length=50, unique=True)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.name}'

class Link(models.Model):
    title = models.TextField(max_length=200, unique=True)
    url = models.URLField(max_length=250, unique=True)
    tags = models.ManyToManyField(Tag)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.title}'
