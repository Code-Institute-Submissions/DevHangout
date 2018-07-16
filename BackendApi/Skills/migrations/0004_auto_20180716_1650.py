# Generated by Django 2.0.5 on 2018-07-16 15:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0014_auto_20180713_1234'),
        ('Skills', '0003_auto_20180713_1234'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='skills',
            options={'verbose_name_plural': 'Skill List'},
        ),
        migrations.AlterModelOptions(
            name='skillslist',
            options={},
        ),
        migrations.RemoveField(
            model_name='skills',
            name='profileID',
        ),
        migrations.RemoveField(
            model_name='skills',
            name='skillsID',
        ),
        migrations.RemoveField(
            model_name='skillslist',
            name='icon',
        ),
        migrations.RemoveField(
            model_name='skillslist',
            name='name',
        ),
        migrations.AddField(
            model_name='skills',
            name='icon',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='skills',
            name='name',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='skillslist',
            name='listofSkills',
            field=models.TextField(blank=True, max_length=10000),
        ),
        migrations.AddField(
            model_name='skillslist',
            name='profileID',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.Profile'),
        ),
    ]
