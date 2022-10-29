"""
A Manager is the interface through which database query operations
are provided to Django models.
At least one Manager exists for every model in a Django application.
"""
from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):
    def create_user(self, username, password, email=None):
        if username is None:
            raise TypeError("Users must have an identifier.")

        if password is None:
            raise TypeError("Users must have a password.")

        user = self.model(
            username=username,
            email=self.normalize_email(email),
        )
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, username, password):
        user = self.create_user(username, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user
