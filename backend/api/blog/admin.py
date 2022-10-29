from django.contrib import admin
from django.contrib.auth.models import Group as authGroup
import api.blog.models as bm

# Unregister Django auth group so we can use our custom group
admin.site.unregister(authGroup)

# Each class must be in a seperate line
admin.site.register(bm.User)
admin.site.register(bm.Group)
admin.site.register(bm.Post)
admin.site.register(bm.Comment)
admin.site.register(bm.Category)
