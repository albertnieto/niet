# Generated by Django 4.1.2 on 2022-10-27 01:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, unique=True)),
                ('description', models.TextField()),
                ('image', models.FilePathField(blank=True, null=True, path='static/projects/img')),
                ('repository', models.URLField(blank=True, null=True)),
                ('status', models.CharField(choices=[('Pending', 'Pending'), ('In progress', 'In Progress'), ('On hiatus', 'On Hiatus'), ('Finished', 'Finished')], default='Pending', max_length=11)),
                ('tags', models.ManyToManyField(to='portfolio.tag')),
            ],
        ),
    ]