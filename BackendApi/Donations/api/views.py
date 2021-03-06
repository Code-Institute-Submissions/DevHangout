from django.contrib.auth.models import User
from rest_framework import viewsets
from .permissions import IsOwner
from ..models import Donation
from .serializers import DonationSerializer


class DonationView(viewsets.ModelViewSet):
    """"This view will display a single Donation from a user"""
    permission_classes = (IsOwner, )
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer

    def get_queryset(self):
        user_id = self.kwargs["id"]
        donation_id = self.kwargs.get("pk")
        if donation_id:
            return User.objects.get(id=user_id).donation_user.filter(id=donation_id)
        else:
            return User.objects.get(id=user_id).donation_user
