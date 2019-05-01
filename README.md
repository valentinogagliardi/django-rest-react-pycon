# django-rest-react-pycon
> Demo repo for Pycon X talk "Decoupling Django with Django REST (and a sprinkle of React)"

## Intro

The following repo should be intended as a loose guideline for structuring your Django REST project with modern frontend libraries. It is an evolution of [django-drf-react-quickstart](https://github.com/valentinogagliardi/django-drf-react-quickstart). The companion article [Django REST with React (Django 2.0 and a sprinkle of testing)](https://www.valentinog.com/blog/drf/) gave me the idea for proposing a talk at Pycon X Florence 2019.

## What's inside

This repo wants to give you two ideas for organizing a Django REST project with React. The same concepts apply to Vue. The project has two apps:

1. **create-react-app_1** is a Django application containing a front-end made with create-react-app. It is a stand-alone front-end meant to be used as a single page application. The application consumes a Django REST API and uses JWT authentication. With this approach you get the best of both worlds. I did not create any model for this app, it gets the data from the API exposed by custom_webpack_conf_2/urls.py.

2. **custom_webpack_conf_2** is a Django app containing an example of a custom webpack configuration. This app exposes a REST API. It's just one of the approaches for producing a bundle into a custom location (usually app_name/static/js). The application consumes a Django REST API and uses JWT authentication. The custom webpack approach does not scale well and you'll get soon in trouble when you'll want to reach for code splitting. It works fine for smaller projects though. This project uses Redux. Demo on [Heroku](https://secure-brushlands-44802.herokuapp.com/link2/).

## Development

Install the dependencies:

```bash
pip install -r requirements/dev.txt
```

Run the project:

````bash
export DJANGO_SETTINGS_MODULE="django_rest_react.settings.dev"; export SECRET_KEY='CHANGEME!' 
python manage.py runserver
````

## Test

For UI testing see `./custom_webpack_conf_2/src/README.md`

## Coverage

````bash
export DJANGO_SETTINGS_MODULE="django_rest_react.settings.dev"; export SECRET_KEY='CHANGEME!' 
coverage run --source='custom_webpack_conf_2' manage.py test
coverage report
coverage html
````

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
