"""niet URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path, re_path
from django.views import debug
from django.views.generic.base import RedirectView
from django.contrib.staticfiles.storage import staticfiles_storage
from rest_framework import routers
from niet.quickstart import views

# Redirect for favicon
# FIXME: fix favicon display
favicon_view = RedirectView.as_view(url=staticfiles_storage.url('favicon.ico'), permanent=True)

# Wire up our API using automatic URL routing.
router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', debug.default_urlconf),
    
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),


    # TODO: custom favicon for each project in portfolio
    re_path('favicon.ico', favicon_view),
]
