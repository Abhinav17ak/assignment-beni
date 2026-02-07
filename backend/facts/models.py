from django.db import models

# Create your models here.
class Fact(models.Model):
    fact = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.fact

