# Generated by Django 2.0.5 on 2018-09-08 09:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('school', models.CharField(max_length=50)),
                ('qualification', models.CharField(max_length=50)),
                ('fieldOfStudy', models.CharField(max_length=50)),
                ('dateFrom', models.DateField()),
                ('dateTo', models.DateField(null=True)),
                ('current', models.BooleanField(default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='edu_user', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Education',
            },
        ),
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('jobTitle', models.CharField(max_length=50)),
                ('company', models.CharField(max_length=50)),
                ('location', models.CharField(max_length=50)),
                ('dateFrom', models.DateField()),
                ('dateTo', models.DateField(blank=True, null=True)),
                ('current', models.BooleanField(default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='exp_user', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Experience',
            },
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(blank=True, max_length=50, null=True)),
                ('lastName', models.CharField(blank=True, max_length=50, null=True)),
                ('avatar', models.CharField(blank=True, default='https://i.imgur.com/AAfxTCq.png', max_length=255)),
                ('location', models.CharField(blank=True, max_length=50, null=True)),
                ('website', models.CharField(blank=True, max_length=50, null=True)),
                ('company', models.CharField(blank=True, max_length=50, null=True)),
                ('title', models.CharField(blank=True, max_length=50, null=True)),
                ('backgroundImage', models.CharField(blank=True, default='https://i.imgur.com/rlaUnMY.jpg', max_length=255)),
                ('bio', models.TextField(blank=True, null=True)),
                ('twitter', models.CharField(blank=True, max_length=100, null=True)),
                ('facebook', models.CharField(blank=True, max_length=100, null=True)),
                ('linkedin', models.CharField(blank=True, max_length=100, null=True)),
                ('instagram', models.CharField(blank=True, max_length=100, null=True)),
                ('youtube', models.CharField(blank=True, max_length=100, null=True)),
                ('github', models.CharField(blank=True, max_length=50, null=True)),
                ('donator', models.BooleanField(default=False)),
                ('testimonal', models.TextField(blank=True, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profile_user', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Profile Information',
            },
        ),
    ]
