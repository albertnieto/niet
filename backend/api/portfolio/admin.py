from django.contrib import admin
from api.portfolio.models import *

# Each class must be in a seperate line
admin.site.register(Project)
admin.site.register(Tag)