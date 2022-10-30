from django.shortcuts import render
from django.views.generic.base import RedirectView
from django.contrib.staticfiles.storage import staticfiles_storage

# TODO: custom favicon for each project in portfolio
# Redirect for modern browsers always asking for favicon
favicon_view = RedirectView.as_view(
    url=staticfiles_storage.url("favicon.ico"), permanent=True
)


def bad_request_view(request, exception):
    return render(request, "400.html", status=400)


def permission_denied_view(request, exception):
    return render(request, "403.html", status=403)


def page_not_found_view(request, exception):
    return render(request, "404.html", status=404)


def server_error_view(request, *args, **argv):
    return render(request, "500.html", status=500)
