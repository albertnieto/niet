import os
from django.db import models
from dotenv import load_dotenv, find_dotenv

# For deployment, specify the path of the dot env
dotenv_path = os.path.join(os.path.dirname(__file__), '.env')

# Load environment variables for hidden values (eg. secret key)
load_dotenv(find_dotenv())


class Tag(models.Model):
    name = models.TextField(max_length=20)

    def __str__(self):
        return self.name


class Project(models.Model):
    class Status(models.TextChoices):
        PENDING = "Pending"
        IN_PROGRESS = "In progress"
        ON_HIATUS = "On hiatus"
        FINISHED = "Finished"

    title = models.CharField(max_length=50, unique=True)
    description = models.TextField(blank=True)
    tags = models.ManyToManyField(Tag, blank=True)
    # FilePathField are for already uploaded files
    image = models.ImageField(
        upload_to=os.environ.get("IMG_PATH"),
        null=True,
        blank=True,
    )
    repository = models.URLField(null=True, blank=True)

    status = models.CharField(
        max_length=11, choices=Status.choices, default=Status.PENDING
    )

    def __str__(self):
        return self.title
