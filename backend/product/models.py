import uuid
from django.db import models
from account.models import UserAccount

class Product(models.Model):
    id = models.UUIDField(editable=False, unique=True, primary_key=True, default=uuid.uuid4, auto_created=True)
    owner = models.ForeignKey(UserAccount, default=1, on_delete=models.CASCADE)
    name = models.CharField(max_length=128)
    price = models.IntegerField(default=5000)

    def __str__(self):
        return self.name