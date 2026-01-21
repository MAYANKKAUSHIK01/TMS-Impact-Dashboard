from django.contrib import admin
from django.urls import path
from dashboard.views import DashboardStatsView # Import your view

urlpatterns = [
    path('admin/', admin.site.urls),
    # The API Endpoint
    path('api/dashboard-stats/', DashboardStatsView.as_view(), name='dashboard-stats'),
]