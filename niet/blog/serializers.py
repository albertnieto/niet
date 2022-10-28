from niet.blog.models import Post, User, Group
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    # When returning users, posts will be shown as urls
    # FIXME: Not working
    posts = serializers.HyperlinkedRelatedField(
        many=True, 
        read_only=True,
        view_name = 'post-detail'
    )

    class Meta:
        model = User
        fields = [
            'url', 'username', 'email', 'groups', 'posts'
        ]
        # Access instance by username instead of pk
        lookup_field = 'username'
        extra_kwargs = {
            'url': {'lookup_field': 'username'}
        }


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']
        # Access instance by username instead of pk
        lookup_field = 'name'
        extra_kwargs = {
            'url': {'lookup_field': 'name'}
        }

class PostSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Post
        fields = [
            'url', 'id', 'title', 'body', 'owner'
        ]
        # Access instance by id instead of pk
        lookup_field = 'id'
        extra_kwargs = {
            'url': {'lookup_field': 'id'}
        }