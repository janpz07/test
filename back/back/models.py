from django.db import models
from django.utils import timezone
from django.core.validators import MaxValueValidator, MinValueValidator


class personas(models.Model):
    """ Modelos de personas"""
    nombre = models.CharField(max_length=100)
    apellidoPaterno = models.CharField(max_length=100)
    apellidoMaterno = models.CharField(max_length=100)
    nacimiento = models.CharField(max_length=100)

class coches(models.Model):
    """ Coches de las personas.  persona es la llave foranea."""
    persona = models.ForeignKey(personas, on_delete=models.CASCADE)
    marca = models.CharField(max_length=100)
    tipo = models.CharField(max_length=100)
    year = models.CharField(max_length=100)
    color = models.CharField(max_length=100)
	