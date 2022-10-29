from api.portfolio.models import Tag, Project
from rest_framework import serializers


class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = [
            'url', 'name'
        ]
        # Access instance by username instead of pk
        lookup_field = 'name'
        extra_kwargs = {
            'url': {'lookup_field': 'name'}
        }


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = [
            'url', 'title', 'description', 'tags', 
            'image', 'repository', 'status'
        ]
        # Access instance by username instead of pk
        lookup_field = 'title'
        extra_kwargs = {
            'url': {'lookup_field': 'title'}
        }
