from .base import *
import django_heroku

SECURE_SSL_REDIRECT = os.environ['SECURE_SSL_REDIRECT']

django_heroku.settings(locals())