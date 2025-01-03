# Generated by Django 5.0.7 on 2024-07-11 20:48

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('slug', models.SlugField()),
                ('category', models.CharField(choices=[('world', 'World'), ('travel', 'Travel'), ('coffee', 'Coffee'), ('work_life', 'Work Life'), ('digital_nomad', 'Digital Nomad'), ('food', 'Food'), ('hikes', 'Hikes'), ('beaches', 'Beaches')], default='world', max_length=50)),
                ('thumbnail', models.ImageField(upload_to='photo/%Y/%m/%d/')),
                ('excerpt', models.CharField(max_length=200)),
                ('month', models.CharField(max_length=3)),
                ('day', models.CharField(max_length=2)),
                ('content', models.TextField()),
                ('featured', models.BooleanField(default=False)),
                ('date_created', models.DateTimeField(blank=True, default=datetime.datetime.now)),
            ],
        ),
    ]
