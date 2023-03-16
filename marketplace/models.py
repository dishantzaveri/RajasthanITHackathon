from django.db import models

from django.contrib.auth import get_user_model
User = get_user_model()

class ItemPost(models.Model):
    created_on 			= models.DateTimeField(auto_now_add=True)
    item_title 			= models.CharField(max_length=100, blank=True, default='')
    item_body 			= models.TextField(blank=True, default='')
    item_images    		= models.ImageField(null=True,blank=True)
    item_owner		    = models.ForeignKey(User, on_delete=models.CASCADE,related_name='item_by')
    # item_rating         = models.IntegerField(default=0, blank=True, null=True)

    
    class Meta:
        ordering = ['created_on']
