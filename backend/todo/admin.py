from django.contrib import admin
from .models import ToDo

# Register your models here.

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

admin.site.register(ToDo, TodoAdmin)
