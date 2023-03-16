# Use the official Python image as the base image
FROM python:3.8

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

# Install the application dependencies
# RUN pip install virtualenvwrapper-win
# RUN mkvirtualenv virenv
# RUN workon virenv
RUN pip install -r requirements.txt

RUN python manage.py makemifrations

RUN python manage.oy migrate

RUN python manage.py runserver

# Define the entry point for the container
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
