import api.portfolio.models as pm
from rest_framework import serializers


class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = pm.Tag
        fields = ["url", "name"]
        # Access instance by username instead of pk
        lookup_field = "name"
        extra_kwargs = {"url": {"lookup_field": "name"}}


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    tags = serializers.SlugRelatedField(
        slug_field="name",
        many=True,
        queryset=pm.Tag.objects.all(),
    )

    class Meta:
        model = pm.Project
        fields = [
            "url",
            "title",
            "description",
            "tags",
            "image",
            "repository",
            "status",
        ]
        # Access instance by username instead of pk
        lookup_field = "title"
        extra_kwargs = {"url": {"lookup_field": "title"}}
