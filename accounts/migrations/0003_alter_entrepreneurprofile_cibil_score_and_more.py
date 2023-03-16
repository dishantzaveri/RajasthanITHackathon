# Generated by Django 4.1 on 2023-03-16 10:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_entrepreneurprofile_cibil_score_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entrepreneurprofile',
            name='cibil_score',
            field=models.IntegerField(blank=True, default=300, null=True),
        ),
        migrations.AlterField(
            model_name='startup',
            name='anual_turnover',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
