from rest_framework import serializers
from .models import *
# from accounts.models import User,WorkExperience

class ItemPostSerializer(serializers.ModelSerializer):
    item_owner = serializers.ReadOnlyField(source='owner.name')
    class Meta:
        model = ItemPost
        fields = ['id', 'item_title', 'item_body', 'item_owner','item_images']
