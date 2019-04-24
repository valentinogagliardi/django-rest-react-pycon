from django.shortcuts import render


def index(request):
    return render(request, 'create_react_app_1/index.html')


