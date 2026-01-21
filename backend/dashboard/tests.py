from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import Donation

class DashboardTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        Donation.objects.create(amount=1500)

    def test_metrics_calculation(self):
        """Test if API correctly aggregates data"""
        response = self.client.get('/api/dashboard-stats/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # 1500 / 150 = 10 lives touched
        self.assertEqual(response.data['livesTouched'], 10)