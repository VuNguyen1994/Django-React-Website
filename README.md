# My_Website by Vu Nguyen

### A simple React Frontend and Python Django Backend Project communicating via Django Rest Framework API and React Hooks. 

### The project is deployed using Apache2 and WSGI on Ubuntu EC2 AWS service and register domain name on Route 53 AWS. 

### The website fetched data from Django backend and list out a summary details of my projects


#### Step 1: On Ubuntu, setup Django settings.py to allow AWS host and React client. 
####
#### Step 2: Setup Apache2 config for the website with media, python path and wsgi.py path. Allow permissions for group www-data so Apache can access SQLite DB. 
#### Restart apache server by sudo systemctl restart apache2. Setup ufw to block inbound from unknown source and disallow development port, then allow http/tcp (port 80) when deploying. Use AWS Security Group to set up allow on HTTP, SSH only. 
####
#### Step 3: Install nodejs, npm. Add option multiviews for .htaccess in public directory in the public folder of React app and then, go to frontend dir and enter command: npm run build.
####
#### Step 4: Delete index.html at /var/www/html and copy all the files from the build folder created by React build above to /var/www/html. This is where Apache will read the files and serve the frontend. The frontend will communicate with backend using API and show the data. Restart apache server after that.
####
#### Step 5: Access the website at the aws service ip. 
####
#### Step 6: Use Route 53 AWS service to register a domain and connect the IP with the domain. Make sure to update the settings.py in Django Backend to allow the hosts and cors headers origin as well as the front end is fetching data correctly with new domain.
####
#### Step 7: Register for HTTPS service using SSL certificate with Certbot Let's Encrypt. Modify the Apache2 config file to avoid duplicate headers error for Cerbot and restart Apache2 service.


##### Documentations on Django:
##### https://www.django-rest-framework.org/api-guide/viewsets/#modelviewset
##### https://docs.djangoproject.com/en/3.1/intro/tutorial01/

##### Documentations on React:
##### https://reactjs.org/docs/handling-events.html

##### Documentations on routing React and Django to Apache2 Server:
##### https://blog.learningdollars.com/2020/01/16/how-to-host-a-django-api-using-mod-wsgi-serving-a-react-frontend-on-an-apache-server-on/
