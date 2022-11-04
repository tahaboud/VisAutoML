from rest_framework import viewsets, status, decorators
from rest_framework.response import Response
from .serializers import ModelSerializer, ModelDescriptionSerializer
from .models import Model, ModelDescription
from .review import get_review
from django.shortcuts import render
import json


def index(request):
    return render(request, "machine_learning/index.html")


class ModelViewSet(viewsets.ViewSet):

    def list(self, request):
        models = Model.objects.all()
        serializer = ModelSerializer(models, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = ModelSerializer(data=request.data)
        if serializer.is_valid():
            model = serializer.save()
            result = get_review(model.data_set.path)
            description = ModelDescription.objects.create(
                model=model, description={})
            description_serializer = ModelDescriptionSerializer(description)
            return Response({"response": result, "model": serializer.data, "description": description_serializer.data})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk):
        model = Model.objects.get(id=pk).delete()
        return Response({"response": "Dataset deleted succesfully"})


class ModelDescriptionViewSet(viewsets.ViewSet):

    def update(self, request, pk):
        description = ModelDescription.objects.get(id=pk)
        serializer = ModelDescriptionSerializer(description, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
