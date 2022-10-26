"""niet URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
"""
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic.base import RedirectView
from django.contrib.staticfiles.storage import staticfiles_storage
from rest_framework import routers
from niet.blog import views

# Redirect for favicon
# FIXME: fix favicon display
favicon_view = RedirectView.as_view(url=staticfiles_storage.url('favicon.ico'), permanent=True)

# Wire up our API using automatic URL routing.
router = routers.DefaultRouter()
router.register('users', views.UserViewSet)
router.register('groups', views.GroupViewSet)

# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),


    # TODO: custom favicon for each project in portfolio
    re_path('favicon.ico', favicon_view),
]

# Overriding handlers to show custom error pages
handler400 = "niet.views.bad_request_view"
handler403 = "niet.views.permission_denied_view"
handler404 = "niet.views.page_not_found_view"
handler500 = "niet.views.server_error_view"
