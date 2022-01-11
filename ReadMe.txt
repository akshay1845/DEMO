In order to run the project,
open cmd and run following commands:
1. open the path of folder where manage.py file is located.
2.python manage.py runserver
you will get one link, copy and paste it in your browser.
Sign Up form loaded.
-In that, After all valid Data Entry submit button will be enabled. and you can Submit your Form.

For Databse...
open your MySql workbench
        'NAME': 'signup',
        'USER': 'root',
        'PASSWORD': 'Akshay@184523',
        'PORT': 3306,
        'HOST': 'localhost',  

In case you don't have MySql and,
If you want to use DJango Administration then change in settings.py file...
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',   
    }
}

user:admin
password:admin

  