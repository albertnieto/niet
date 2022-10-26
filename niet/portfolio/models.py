from email.policy import default
from random import choices
from django.db import models

# Create your models here.

class Tag(models.Model):
    name = models.TextField(max_length=20)

    def __str__(self):
        return self.name

class Project(models.Model):
    class Status(models.TextChoices):
        PENDING = 'Pending'
        IN_PROGRESS = 'In progress'
        ON_HIATUS = 'On hiatus'
        FINISHED = 'Finished'

    title = models.CharField(max_length=50)
    description = models.TextField()
    tags = models.ManyToManyField(Tag)
    image = models.FilePathField(path="static/projects/img", null=True, blank=True)
    repository = models.URLField(null=True, blank=True)

    status = models.CharField(
        max_length=11,
        choices=Status.choices,
        default=Status.PENDING
    )

    def __str__(self):
        return self.title