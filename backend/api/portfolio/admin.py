from django.contrib import admin
import api.portfolio.models as pm

# Each class must be in a seperate line
admin.site.register(pm.Project)
admin.site.register(pm.Tag)
