"""niet URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
"""
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic.base import RedirectView
from django.contrib.staticfiles.storage import staticfiles_storage
from rest_framework import routers
from niet.blog import views as blog_views
from niet.portfolio import views as portfolio_views

# TODO: custom favicon for each project in portfolio
# Redirect for modern browsers always asking for favicon
favicon_view = RedirectView.as_view(url=staticfiles_storage.url('favicon.ico'), permanent=True)

# Wire up our API using automatic URL routing.
router = routers.DefaultRouter()
router.register('users', blog_views.UserViewSet)
router.register('groups', blog_views.GroupViewSet)
router.register('posts', blog_views.PostViewSet)
router.register('comments', blog_views.CommentViewSet)
router.register('tags', portfolio_views.TagViewSet)
router.register('projects', portfolio_views.ProjectViewSet)

# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),
    path('favicon.ico', favicon_view),
]

# Overriding handlers to show custom error pages
handler400 = "niet.views.bad_request_view"
handler403 = "niet.views.permission_denied_view"
handler404 = "niet.views.page_not_found_view"
handler500 = "niet.views.server_error_view"
