"""niet URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/

Urlpatterns can “include” other URLconf modules.
This essentially “roots” a set of URLs below other ones.

drf_urlconf includes urls from django rest framework
router_urlconf includes urls from the viewsets of this project
"""
from django.contrib import admin
from django.urls import include, path
from api.views import favicon_view
from api.routers import router


drf_urlconf = include("rest_framework.urls", namespace="rest_framework")
router_urlconf = include(router.urls)

urlpatterns = [
    path("", router_urlconf),
    path("api-auth/", drf_urlconf),
    path("admin/", admin.site.urls),
    path("favicon.ico", favicon_view),
]

# Overriding handlers to show custom error pages
handler400 = "api.views.bad_request_view"
handler403 = "api.views.permission_denied_view"
handler404 = "api.views.page_not_found_view"
handler500 = "api.views.server_error_view"
