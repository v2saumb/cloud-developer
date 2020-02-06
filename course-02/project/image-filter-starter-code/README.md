# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:
### The Simple Frontend

A basic Ionic client web application which consumes the RestAPI Backend. 

[**GITHUB REPOSITORY**](https://github.com/v2saumb/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)

```https://github.com/v2saumb/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend```

#### Additional Changes

- Personalized the front end, changed the look of the application a bit
- Made changes to resolve duplicate submit. 
- Mapped custom domain **samagram.saumyabhatnagar.me**

#### Testing Information 

- [**FrontEnd URL:** (http://samagram.saumyabhatnagar.me/home)](http://samagram.saumyabhatnagar.me/home) 
- **username:** hello@gmail.com 
- **password:** fancypass


***

### The RestAPI Backend

This is a Node-Express server which can be deployed to a cloud service. This provides enpoints to login, post and get feeds 

[**GITHUB REPOSITORY**](https://github.com/v2saumb/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi) 

```https://github.com/v2saumb/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi```

#### Additional changes

- Refactored the code to call the Image filter service. Currently handling it only at the time of posting the feed. TODO - optimize the service so we dont have to transfer the images back and forth
- Additional logging for debugging 
- Used TinyUrl api to reduce the S3 signed URL's
- Mapped custom domain samagram.saumyabhatnagar.me
- [**Rest Service URL** (http://api.saumyabhatnagar.me) ](http://api.saumyabhatnagar.me) 

#### Testing Information

- [**Postman Collection**](https://github.com/v2saumb/cloud-developer/blob/master/course-02/exercises/udacity-c2-restapi/udacity-c2-restapi.postman_collection.json)
- **username:** hello@gmail.com 
- **password:** fancypass

***

### The Image Filtering Microservice

This is the final project for the course. It is a Node-Express application which runs a simple script to process images. 

[**GITHUB REPOSITORY**](https://github.com/v2saumb/cloud-developer/tree/master/course-02/project/image-filter-starter-code) 

```https://github.com/v2saumb/cloud-developer/tree/master/course-02/project/image-filter-starter-code```

#### Additional Changes

- Setup the environment, initialize and deploy using beanstalk
- Added Authorization
- Added code to delete the temporary files after processing
- Mapped custom domain samagram.saumyabhatnagar.me
- [**Image Filter Service URL** (http://filtersvc.saumyabhatnagar.me)](http://filtersvc.saumyabhatnagar.me)

#### Testing Information

- [**Postman Collection For Authorization**](https://github.com/v2saumb/cloud-developer/blob/master/course-02/exercises/udacity-c2-restapi/udacity-c2-restapi.postman_collection.json) Use the login end point to generate token.
- [**Postman Collection for Image Filter](https://github.com/v2saumb/cloud-developer/blob/master/course-02/project/image-filter-starter-code/cloud-cdnd-c2-final.postman_collection.json) Make sure to add the Authorization header
- **username:** hello@gmail.com 
- **password:** fancypass



***

## Project Tasks List

- [x] Setup Node Environment
- [x] Create a new endpoint in the server.ts file
- [x] Deploying your system
   
## Stand Out (Optional)

- [x] Refactor the course RESTapi
- [x] Authentication
- [x] Custom Domain Name **saumyabhatnagar.me**

***

## Deployment Screenshots

- Image Filter Service
![Image Filter Service](deployment_screenshots/Screenshot_withoutdomainmapping.jpg)


- Rest Api
![Image Filter Service](deployment_screenshots/Screenshot__restAPI_withoutdomainmapping.jpg)
