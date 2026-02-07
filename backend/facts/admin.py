from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Fact

admin.site.register(Fact)