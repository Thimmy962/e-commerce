from rest_framework import permissions, generics
from .serializers import UserSerializer
from .models import UserAccount
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['email'] = user.email
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
  

class GetUserAPIView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user


getUser = GetUserAPIView.as_view()



class AddUserAPIview(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]

create_user = AddUserAPIview.as_view()



class ViewUsersAPIview(generics.ListAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

view_users = ViewUsersAPIview.as_view()



# eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwMzMyMDA2LCJpYXQiOjE3MTAzMzE3MDYsImp0aSI6IjNjZWFiNzNkMTg4OTQyZTNhZDg4YWQ1YzNiOGY4YjdjIiwidXNlcl9pZCI6MSwiZW1haWwiOiJ0aEBnbS5jb20ifQ.mZSzsHNMA9irJY7gdOj1nXEpcMD91z80n7mT7TlgKI0