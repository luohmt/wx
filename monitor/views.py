

from django.shortcuts import render
from django.http import HttpResponse
from monitor import models
# Create your views here.


def login(request):
    return render(request,'login.html')


def validate(request):
    username_error = False
    password_error = False
    dj_to_js = 'nimabi'

    if 'username' in request.GET and 'password' in request.GET:
        input_username=request.GET['username']
        input_password=request.GET['password']
        root_user = models.Login.objects.get(username='xmu')
        print root_user;
        if input_username==root_user.username:
            if input_password==root_user.password:
                return render(request, 'index.html', {'dj_to_js': dj_to_js})
            else:
                password_error = True
                return render(request, 'login.html', {'root_user': root_user,

                                                      'password_error': password_error,

                                                      })
        else:
            username_error=True
            return render(request, 'login.html', {'root_user': root_user,

                                                  'username_error': username_error,
                                                  })
    return render(request, 'login.html')

def article_type_show(request):
     article_type = models.ArticleType.objects.all().values('article_type_nm')
     print article_type;


     return render(request,'index.html',{'article_type':article_type})



def subject(request):
    subject_nm = models.Subject.objects.all().values('sub_nm')
    return render(request,'index.html',{'subject_nm':subject_nm})







