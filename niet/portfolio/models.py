from email.policy import default
from random import choices
from django.db import models

# Create your models here.

class Tags(models.Model):
    name = models.TextField(max_length=20)

class Project(models.Model):
    class Status(models.TextChoices):
        PENDING = 'Pending'
        IN_PROGRESS = 'In progress'
        ON_HIATUS = 'On hiatus'
        FINISHED = 'Finished'

    title = models.CharField(max_length=50)
    description = models.TextField()
    tags = models.ManyToManyField(Tags)
    image = models.FilePathField(path="/img")
    repository = models.URLField()

    status = models.CharField(
        max_length=11,
        choices=Status.choices,
        default=Status.PENDING
    )