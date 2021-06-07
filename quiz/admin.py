from django.contrib import admin
from .models import Geography, History, Quizapp,Politics,Physics,Biology,Chemistry,Maths

# Register your models here.
#admin.site.register(Quizapp)
admin.site.register(Geography)
admin.site.register(History)
admin.site.register(Physics)
admin.site.register(Chemistry)
admin.site.register(Politics)
admin.site.register(Biology)
admin.site.register(Maths)