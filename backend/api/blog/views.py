from rest_framework import viewsets
from rest_framework import permissions
import api.blog.serializers as bs
import api.blog.models as bm
import api.blog.permissions as bp


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = bm.User.objects.all().order_by("-date_joined")
    serializer_class = bs.UserSerializer
    permission_classes = (permissions.IsAdminUser,)
    # Access instance by username instead of pk
    lookup_field = "username"


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = bm.Group.objects.all()
    serializer_class = bs.GroupSerializer
    permission_classes = (permissions.IsAdminUser,)
    # Access instance by username instead of pk
    lookup_field = "name"


class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = bm.Post.objects.all()
    serializer_class = bs.PostSerializer
    permission_classes_by_action = {
        "detail": [permissions.IsAuthenticatedOrReadOnly, bp.IsOwnerOrReadOnly],
        "list": [permissions.IsAdminUser],
    }
    # Access instance by id instead of pk
    lookup_field = "id"

    # Override the default perform_create function
    # to set the owner field to the current user
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CommentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = bm.Comment.objects.all()
    serializer_class = bs.CommentSerializer
    permission_classes_by_action = {
        "detail": [permissions.IsAuthenticatedOrReadOnly, bp.IsOwnerOrReadOnly],
        "list": [permissions.IsAdminUser],
    }
    # Access instance by id instead of pk
    lookup_field = "id"

    # Override the default perform_create function
    # to set the owner field to the current user
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = bm.Category.objects.all()
    serializer_class = bs.CategorySerializer
    permission_classes_by_action = {
        "detail": [permissions.IsAuthenticatedOrReadOnly, bp.IsOwnerOrReadOnly],
        "list": [permissions.IsAdminUser],
    }

    # Access instance by username instead of pk
    lookup_field = "name"
