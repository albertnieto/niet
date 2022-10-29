from rest_framework import routers
from api.blog import views as blog_views
from api.portfolio import views as portfolio_views

# Wire up our API using automatic URL routing.
# https://www.django-rest-framework.org/api-guide/routers/
router = routers.DefaultRouter()
router.register("users", blog_views.UserViewSet)
router.register("groups", blog_views.GroupViewSet)
router.register("posts", blog_views.PostViewSet)
router.register("comments", blog_views.CommentViewSet)
router.register("categories", blog_views.CategoryViewSet)
router.register("tags", portfolio_views.TagViewSet)
router.register("projects", portfolio_views.ProjectViewSet)
