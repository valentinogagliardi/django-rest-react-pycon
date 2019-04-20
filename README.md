# django-rest-react-pycon
> Demo repo for Pycon X talk "Decoupling Django with Django REST (and a sprinkle of React)"

THIS IS A DEMO, NOT SUITABLE FOR PRODUCTION

## Development

````bash
export DJANGO_SETTINGS_MODULE="django_rest_react.settings.dev"; 
export SECRET_KEY='CHANGEME!'; 
python manage.py runserver
````

## Test

For UI testing see `./custom_webpack_conf_2/src/README.md`

## Coverage

TODO

## Deploy on Heroku

```
git push heroku master
```

# Abstract of the talk

With the rise of JavaScript as the lingua-franca of the web and the steady growth of libraries like React, today’s web developers can build rich and well structured frontend experiences. Pair that with Django and Django REST framework and you get the perfect combination. But it’s not all bells and whistles. What challenges are we going to face when decoupling Django with Django REST? What are the best practices? How to structure such a project? In this talk I’ll guide Django developers (both beginners and intermediate) from 0 to structuring a decoupled Django project.

## Description

The goal of this talk is to give Django developers an overview of a Django REST project, paired with React, as well as the trade-offs of the decoupled approach. By the end of the talk the developer should be able to configure a new Django REST project and use a frontend library for interacting with the API.

### 1. Why and when to decouple Django

There are many ways for decoupling a Django application and each one depends on the use case. In this section we’ll outline what decoupling is, why decoupling is a great approach and why sometimes it is not the right thing to do. We’ll see what the challenges of such approach are and how to deal with authentication in a decoupled context.

### 2. Django REST fundamentals

Django REST framework is a Django application for exposing API endpoints from a Django project. It this section we’ll see the building blocks of a Django API app: the model, the serializer and the view. Models should not be a surprise for the audience, they come from Django. Serializers instead are provided by Django REST. We’ll also see how a Django REST view looks like and how to leverage both function based views and generic views within the project. 

### 3. Setting up the frontend

The key for a truly decoupled experience is a frontend for consuming and interacting with the API. In this section we’ll see how to structure a Django REST project alongside with React. We will explore two approaches: fully decoupled frontend and mixed frontend.

### 4. A note on testing and closing words

In the context of a decoupled Django site we move from the typical Django tests to testing the API’s response instead. We will see how a simple API test looks like. And for the JavaScript frontend we’ll take a look at the current available tooling for functional testing.

Questions?
