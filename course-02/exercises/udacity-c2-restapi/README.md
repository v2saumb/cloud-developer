# Udagram REST API
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

#### Testing Information

- [**Rest Service URL** (http://api.saumyabhatnagar.me) ](http://api.saumyabhatnagar.me) 
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

#### Testing Information

- [**Image Filter Service URL** (http://filtersvc.saumyabhatnagar.me)](http://filtersvc.saumyabhatnagar.me)
- [**Postman Collection For Authorization**](https://github.com/v2saumb/cloud-developer/blob/master/course-02/exercises/udacity-c2-restapi/udacity-c2-restapi.postman_collection.json) Use the login end point to generate token.
- [**Postman Collection for Image Filter](https://github.com/v2saumb/cloud-developer/blob/master/course-02/project/image-filter-starter-code/cloud-cdnd-c2-final.postman_collection.json) Make sure to add the Authorization header
- **username:** hello@gmail.com 
- **password:** fancypass


***
## Getting Setup

### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. After cloning, open your terminal and run:
```bash
npm install
```
>_tip_: **npm i** is shorthand for **npm install**

### Installing useful tools
#### 1. [Postbird](https://github.com/paxa/postbird)
Postbird is a useful client GUI (graphical user interface) to interact with our provisioned Postgres database. We can establish a remote connection and complete actions like viewing data and changing schema (tables, columns, ect).

#### 2. [Postman](https://www.getpostman.com/downloads/)
Postman is a useful tool to issue and save requests. Postman can create GET, PUT, POST, etc. requests complete with bodies. It can also be used to test endpoints automatically. We've included a collection (`./udacity-c2-restapi.postman_collection.json `) which contains example requsts.

***

## Running the Server Locally
To run the server locally in developer mode, open terminal and run:
```bash
npm run dev
```

Developer mode runs off the TypeScript source. Any saves will reset the server and run the latest version of the codebase. 

