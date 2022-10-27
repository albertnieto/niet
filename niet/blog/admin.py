from django.contrib import admin
from django.contrib.auth.models import Group as authGroup
from niet.blog.models import Post, User, Group

# Unregister Django auth group so we can use our custom group
admin.site.unregister(authGroup)

# Each class must be in a seperate line
admin.site.register(User)
admin.site.register(Group)
admin.site.register(Post)