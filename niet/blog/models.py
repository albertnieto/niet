from django.db import models
from django.contrib.auth.models import AbstractUser, Group
from niet.utils.tokens import random_id_field
from niet.blog.managers import UserManager

#TODO: to reduce collision, rethink id

# AbstractUser contains all fields, AbstractBaseUser only auth functionality
class User(AbstractUser):
    username = models.CharField(max_length=40, unique=True)
    objects = UserManager()

    USERNAME_FIELD = 'username'
    # Use if custom fields or email are required
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.username

class Group(Group):
    description = models.CharField(max_length=180,null=True, blank=True)

class Post(models.Model):
    id = models.CharField(max_length=20, unique=True, primary_key=True, default=random_id_field)
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100)
    body = models.TextField()
    owner = models.ForeignKey('blog.User', on_delete=models.CASCADE)
    # Adding slug to the final url to improve SEO
    #slug = models.SlugField(max_length=200)

    class Meta:
        ordering = ['created']

    def __str__(self):
        return self.title