from django.test import TestCase
from .DummyFactory import DummyFactory


class ModelTest(TestCase):

    def setUp(self):
        self.link = DummyFactory().link

    def test_str_method(self):
        self.assertEqual(self.link.__str__(), 'Some title')
