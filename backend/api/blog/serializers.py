import api.blog.models as bm
from rest_framework import serializers
from django.utils.timezone import now


# When returning users, posts will be shown as urls
class UserSerializer(serializers.HyperlinkedModelSerializer):
    # Can't use StringRelatedField or HyperlinkedIdentityField
    # because they are read only
    groups = serializers.SlugRelatedField(
        slug_field="name",
        many=True,
        queryset=bm.Group.objects.all(),
    )

    days_since_joined = serializers.SerializerMethodField()

    class Meta:
        model = bm.User
        fields = [
            "url", "username", "email", "website",
            "groups", "days_since_joined"
        ]
        # Access instance by username instead of pk
        lookup_field = "username"
        extra_kwargs = {"url": {"lookup_field": "username"}}

    def get_days_since_joined(self, obj):
        return (now() - obj.date_joined).days


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = bm.Group
        fields = ["url", "name", "description"]
        # Access instance by username instead of pk
        lookup_field = "name"
        extra_kwargs = {"url": {"lookup_field": "name"}}


class PostSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()
    owner = serializers.ReadOnlyField(source="owner.username")
    comments = serializers.PrimaryKeyRelatedField(
        many=True,
        read_only=True,
    )

    categories = serializers.SlugRelatedField(
        slug_field="name",
        many=True,
        queryset=bm.Category.objects.all(),
    )

    class Meta:
        model = bm.Post
        fields = [
            "url", "id", "title", "body", "owner", "comments", "categories"
        ]
        # Access instance by id instead of pk
        lookup_field = "id"
        extra_kwargs = {"url": {"lookup_field": "id"}}


class CommentSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    owner = serializers.ReadOnlyField(source="owner.username")
    # By adding post to meta fields, by default it is serialized like
    # post = serializers.PrimaryKeyRelatedField(queryset=Post.objects.all())

    # FIXME
    # reply_count = serializers.SerializerMethodField()

    class Meta:
        model = bm.Comment
        fields = ["id", "body", "owner", "post"]

    def get_reply_count(self, obj):
        if obj.is_parent:
            return obj.children().count()
        return 0


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = bm.Category
        fields = ["url", "name"]
        # Access instance by name instead of pk
        lookup_field = "name"
        extra_kwargs = {"url": {"lookup_field": "name"}}
