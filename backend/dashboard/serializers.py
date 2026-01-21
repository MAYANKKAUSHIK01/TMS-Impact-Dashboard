from rest_framework import serializers
from .models import ActivityLog
from django.utils.timesince import timesince

class ActivityLogSerializer(serializers.ModelSerializer):
    # Custom field to format time nicely (e.g., "5 mins ago")
    time = serializers.SerializerMethodField()
    
    # Rename fields to match what the React Frontend expects
    user = serializers.CharField(source='user_name')
    action = serializers.CharField(source='action_text')

    class Meta:
        model = ActivityLog
        fields = ['id', 'user', 'action', 'time']

    def get_time(self, obj):
        # Returns string like "2 minutes ago"
        return f"{timesince(obj.timestamp).split(',')[0]} ago"