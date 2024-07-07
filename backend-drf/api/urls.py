from django.urls import path
from accounts import views as UserViews



urlpatterns = [
    path('register/', UserViews.RegisterView.as_view()),
]
