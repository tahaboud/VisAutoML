from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.index),
    path(
        "api/", views.ModelViewSet.as_view({"get": "list", "post": "create"})),
    path("api/<pk>/", views.ModelViewSet.as_view({"delete": "destroy"})),
    path("api/description/<pk>/",
         views.ModelDescriptionViewSet.as_view({"patch": "update"}))
]
