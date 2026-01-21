from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.db.models import Sum, Count
from .models import Volunteer, Donation, ActivityLog
from .serializers import ActivityLogSerializer

class DashboardStatsView(APIView):
    """
    Serves real-time impact metrics using efficient SQL aggregation.
    """
    permission_classes = [AllowAny]

    def get(self, request):
        # 1. Database Aggregation (Performance Optimized)
        metrics = Donation.objects.aggregate(total=Sum('amount'))
        total_funds = metrics['total'] or 0
        
        # Business Logic: 1 Life touched per ₹150 (Example)
        lives_touched = int(total_funds / 150)
        volunteers = Volunteer.objects.filter(is_active=True).count()

        # 2. Activity Feed
        recent = ActivityLog.objects.order_by('-timestamp')[:5]
        serializer = ActivityLogSerializer(recent, many=True)

        return Response({
            "volunteers": volunteers,
            "livesTouched": lives_touched,
            "fundsRaised": total_funds,
            "monthlyData": [65, 59, 80, 81, 56, 120], # Mocked for demo
            "recentActivity": serializer.data
        })