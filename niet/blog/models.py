from django.db import models

class Post(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100)
    body = models.TextField()
    owner = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    # Adding slug to the final url to improve SEO
    slug = models.SlugField(max_length=200)

    class Meta:
        ordering = ['created']

    def __str__(self):
        return self.title