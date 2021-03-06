from django.db import models
from PIL import Image


class Article(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(default='default.jpg', upload_to='project_pics')

    def __str__(self):
        return self.title

    # def save(self, *args, **kawrgs):
    #     """ Override the save() method of super class Django model with resize img using Pillow """
    #     super().save(*args, **kawrgs)
    #
    #     img = Image.open(self.image.path)
    #     if img.height > 600 or img.width > 600:
    #         output_size = (600,600)
    #         img.thumbnail(output_size)
    #         img.save(self.image.path)

