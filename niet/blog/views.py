from django.contrib.auth.decorators import user_passes_test
from rest_framework import viewsets
from rest_framework import permissions
from niet.blog.serializers import *
from niet.blog.models import *
from niet.blog.permissions import *

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAdminUser,)
    # Access instance by username instead of pk
    lookup_field = 'username'

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = (permissions.IsAdminUser,)
    # Access instance by username instead of pk
    lookup_field = 'name'

class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes_by_action = {
        'detail': [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly],
        'list': [permissions.IsAdminUser]
    }
    # Access instance by id instead of pk
    lookup_field = 'id'
    
    # Override the default perform_create function to set the owner field to the current user
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class CommentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes_by_action = {
        'detail': [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly],
        'list': [permissions.IsAdminUser]
    }
    # Access instance by id instead of pk
    lookup_field = 'id'
    
    # Override the default perform_create function to set the owner field to the current user
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes_by_action = {
        'detail': [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly],
        'list': [permissions.IsAdminUser]
    }

    # Access instance by username instead of pk
    lookup_field = 'name'

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)