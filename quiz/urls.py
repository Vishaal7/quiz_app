from os import name
from quiz.models import Physics
from django.urls import path
from . import views


urlpatterns = [
    path('',views.root,name='root'),
    path('geography/',views.geography,name='geography'),
    path('history/',views.history,name='history'),
    path('physics/',views.physics,name='physics'),
    path('biology/',views.biology,name='biology'),
    path('politics/',views.politics,name='politics'),
    path('chemistry/',views.chemistry,name='chemistry'),
    path('maths/',views.maths,name='maths')]