from os import name
from django.http.response import HttpResponse
from django.shortcuts import redirect, render
from django.http import HttpResponse
from .models import Quizapp,Geography,History,Physics,Maths,Biology,Politics,Chemistry

# Create your views here.
def root(request):
    return render(request,'root.html')

def geography(request):
    sub = Geography.objects.all()
    return render(request,'index.html', {'sub':sub})

def history(request):
    sub = History.objects.all()
    return render(request,'index.html',{'sub':sub})

def physics(request):
    sub = Physics.objects.all()
    return render(request,'index.html',{'sub':sub})

def politics(request):
    sub = Politics.objects.all()
    return render(request,'index.html',{'sub':sub})

def chemistry(request):
    sub = Chemistry.objects.all()
    return render(request,'index.html',{'sub':sub})

def biology(request):
    sub = Biology.objects.all()
    return render(request,'index.html',{'sub':sub})

def maths(request):
    sub = Maths.objects.all()
    return render(request,'index.html',{'sub':sub})




        




 

 



   

