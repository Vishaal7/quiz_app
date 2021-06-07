from django.db import models
from django.db.models.fields import TextField
from django.db.models.query_utils import Q, subclasses

# Create your models here.
class Quizapp(models.Model):
       index = models.IntegerField(default=0)      
       qn = models.TextField(default='')
       a = models.CharField(max_length=500)
       b = models.CharField(max_length=100)
       c= models.CharField(max_length=100)
       d = models.CharField(max_length=100)
       ans = models.CharField(max_length=100)
       result = models.IntegerField(default=0)
       
       class Meta:
              abstract = True
      

class Geography(Quizapp):
       sub = models.CharField(max_length=100)

class History(Quizapp):
       sub = models.CharField(max_length=100)

class Physics(Quizapp):
       sub = models.CharField(max_length=100)

class Chemistry(Quizapp):
       sub =models.CharField(max_length=100)

class Biology(Quizapp):
       sub = models.CharField(max_length=100)

class Maths(Quizapp):
       sub=models.CharField(max_length=100)

class Politics(Quizapp):
       sub =models.CharField(max_length=100)

class Economics(Quizapp):
       sub=models.CharField(max_length=100)