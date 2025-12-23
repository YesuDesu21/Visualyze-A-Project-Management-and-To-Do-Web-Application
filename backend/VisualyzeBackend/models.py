from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    user_id = models.CharField(max_length=100, primary_key=True, editable=False)
    #email = models.EmailField(max_length=100, unique=True)

    country_code = models.CharField(max_length=15)
    phone_number  = models.CharField(max_length=15)
    birth_date = models.DateField()
    accept_term = models.BooleanField(default=False)
    
    def save(self, *args, **kwargs):

        if not self.user_id:
            last_user = User.objects.all().order_by('user_id').last()
            
            #If there are no users then set id as 1 otherwise set new id number
            if not last_user:
                new_id_number = 1
            else:
                last_id_number = int(last_user.user_id[1:])
                new_id_number = last_id_number + 1
                
            #Sets username including the format U0001 for user
            self.user_id = f'U{new_id_number:04d}'
            
        super(User,self).save(*args,**kwargs)

class Archive(models.Model):
    pass

class Feedback(models.Model):
    pass

class Itinerary(models.Model):
    pass

class ItineraryActivity(models.Model):
    pass

class OrganizationList(models.Model):
    pass

class Project(models.Model):
    pass

class ProjectTask(models.Model):
    pass

class Settings(models.Model):
    pass

class ToDoTask(models.Model):
    PRIORITY_LEVEL = [
        (1, 'Very Low'),
        (2, 'Low'), 
        (3, 'Medium'),
        (4, 'High'),
        (5, 'Very High'),
    ]
    STATUS = [("ongoing","Ongoing"),("completed","Completed")]
    
    task_id = models.CharField(max_length=100, primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name = "todo_task")
    description = models.CharField(max_length=200, blank=True)
    due_date = models.DateField()
    priority_level = models.IntegerField(choices=PRIORITY_LEVEL, default=3)
    status = models.CharField(max_length=20, choices=STATUS, default='ongoing')


        
