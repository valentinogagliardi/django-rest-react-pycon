from django.contrib.auth.models import User
from rest_framework.test import APITestCase
from .DummyFactory import DummyFactory


class SimpleTest(APITestCase):

    def setUp(self):
        DummyFactory()
        self.path = '/api/link2/'

    def test_guest_cannot_see_links(self):
        response = self.client.get(self.path)
        self.assertEqual(response.status_code, 401)

    def test_authenticated_user(self):
        user = User.objects.create_user(username='valentino',
                                        password='changeme')
        self.client.force_authenticate(user=user)
        response = self.client.get(self.path)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, [{"id": 1,
                                          "title": "Some title",
                                          "url": "Some url",
                                          "tags": ["django", "python"]}])
