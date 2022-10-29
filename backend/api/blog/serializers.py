from api.blog.models import *
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    # When returning users, posts will be shown as urls
    # FIXME: Not showing up in response
    posts = serializers.HyperlinkedRelatedField(
        # Queryset contains mutiple items (a list of items)
        many=True, 
        read_only=True,
        view_name = 'post-detail'
    )

    comments = serializers.HyperlinkedRelatedField(
        many=True, 
        read_only=True,
        view_name = 'comment-detail'
    )

    class Meta:
        model = User
        fields = [
            'url', 'username', 'email', 'groups', 'posts', 'comments'
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
    comments = serializers.PrimaryKeyRelatedField(
        many=True, 
        read_only=True,
    )

    categories = serializers.PrimaryKeyRelatedField(
        many=True, 
        queryset=Category.objects.all()
    )

    class Meta:
        model = Post
        fields = [
            'url', 'id', 'title', 'body', 'owner', 
            'comments', 'categories'
        ]
        # Access instance by id instead of pk
        lookup_field = 'id'
        extra_kwargs = {
            'url': {'lookup_field': 'id'}
        }

class CommentSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    # By adding post to meta fields, by default it is serialized like, add to customize
    #post = serializers.PrimaryKeyRelatedField(queryset=Post.objects.all())

    class Meta:
        model = Comment
        fields = [
            'url', 'id', 'body', 'owner', 'post'
        ]
        
class CategorySerializer(serializers.ModelSerializer):
    posts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'posts']
        # Access instance by name instead of pk
        lookup_field = 'name'
        extra_kwargs = {
            'url': {'lookup_field': 'name'}
        }