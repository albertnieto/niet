from api.portfolio.models import Tag, Project
from django.contrib.auth.decorators import user_passes_test
from rest_framework import viewsets
from rest_framework import permissions
from api.portfolio.serializers import TagSerializer, ProjectSerializer

class TagViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = (permissions.IsAdminUser,)
    # Access instance by username instead of pk
    lookup_field = 'name'

class ProjectViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = (permissions.IsAdminUser,)
    # Access instance by username instead of pk
    lookup_field = 'title'