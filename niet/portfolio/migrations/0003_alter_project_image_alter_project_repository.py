# Generated by Django 4.1.2 on 2022-10-26 19:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_rename_tags_tag'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.FilePathField(blank=True, null=True, path='static/projects/img'),
        ),
        migrations.AlterField(
            model_name='project',
            name='repository',
            field=models.URLField(blank=True, null=True),
        ),
    ]
