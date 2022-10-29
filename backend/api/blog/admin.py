from django.contrib import admin
from django.contrib.auth.models import Group as authGroup
from api.blog.models import *

# Unregister Django auth group so we can use our custom group
admin.site.unregister(authGroup)

# Each class must be in a seperate line
admin.site.register(User)
admin.site.register(Group)
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Category)