from django.db import models
from django.contrib.auth.models import AbstractUser, Group
from api.blog.managers import UserManager
import random

# Defining lengths for random ids to further replace showing pk
SHORT_ID_LENGTH = (2, 4)
MEDIUM_ID_LENGTH = (5, 6)
LONG_ID_LENGTH = (7, 10)


# TODO:  to reduce collision, rethink id
#       move user, group to global app
LENGTH = MEDIUM_ID_LENGTH
random.seed()


def random_number_NM_digits():
    n, m = LENGTH
    range_start = 10 ** (n - 1)
    range_end = (10**m) - 1
    return random.randint(range_start, range_end)


# AbstractUser contains all fields, AbstractBaseUser only auth functionality
class User(AbstractUser):
    username = models.CharField(max_length=40, unique=True)
    website = models.URLField(max_length=180, blank=True)
    objects = UserManager()

    USERNAME_FIELD = "username"
    # Use if custom fields or email are required
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.username


class Group(Group):
    description = models.CharField(max_length=180, blank=True)

    def __str__(self):
        return self.name


class Post(models.Model):
    # TODO: Add slug for SEO
    id = models.CharField(
        max_length=20,
        unique=True,
        primary_key=True,
        default=random_number_NM_digits,
    )
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=False)
    body = models.TextField(blank=True)
    # Forbid the deletion of the referenced object
    owner = models.ForeignKey(
        "blog.User",
        null=True,
        on_delete=models.SET_NULL
    )

    # Adding slug to the final url to improve SEO
    # slug = models.SlugField(max_length=200)

    # Model Meta is the inner class of your model class
    # https://docs.djangoproject.com/en/4.1/ref/models/options/#ordering
    class Meta:
        ordering = ["created"]

    def __str__(self):
        return self.title


class Comment(models.Model):
    id = models.CharField(
        max_length=20,
        unique=True,
        primary_key=True,
        default=random_number_NM_digits,
    )
    # DateField only includes date
    created = models.DateTimeField(auto_now_add=True)
    body = models.TextField(blank=False)
    owner = models.ForeignKey(
        "blog.User",
        null=True,
        on_delete=models.SET_NULL
    )
    # When the referenced object is deleted,
    # also delete the objects that have references
    post = models.ForeignKey(
        "Post",
        related_name="comments",
        on_delete=models.CASCADE
    )

    class Meta:
        ordering = ["created"]

    def __str__(self):
        return self.id


class Category(models.Model):
    name = models.CharField(max_length=50, unique=True, blank=False)
    posts = models.ManyToManyField(
        "Post",
        related_name="categories",
        blank=True
    )

    class Meta:
        # This avoids pluralizing category as categorys
        verbose_name_plural = "categories"

    def __str__(self):
        return self.name
