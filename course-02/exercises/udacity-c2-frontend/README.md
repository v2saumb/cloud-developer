# Udagram Simple Frontend

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

> _tip_: this frontend is designed to work with [The RestAPI Backend](https://github.com/grutt/udacity-c2-restapi). It is recommended you stand up the backend first, test using Postman, and then the frontend should integrate.

### Installing Node and NPM
This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (NPM is included) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

### Installing Ionic Cli
The Ionic Command Line Interface is required to serve and build the frontend. Instructions for installing the CLI can be found in the [Ionic Framework Docs](https://ionicframework.com/docs/installation/cli).

### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. After cloning, open your terminal and run:
```bash
npm install
```
>_tip_: **npm i** is shorthand for **npm install**

### Configure The Backend Endpoint
Ionic uses enviornment files located in `./src/enviornments/enviornment.*.ts` to load configuration variables at runtime. By default `environment.ts` is used for development and `enviornment.prod.ts` is used for produciton. The `apiHost` variable should be set to your server url either locally or in the cloud.

***
### Running the Development Server
Ionic CLI provides an easy to use development server to run and autoreload the frontend. This allows you to make quick changes and see them in real time in your browser. To run the development server, open terminal and run:

```bash
ionic serve
```

### Building the Static Frontend Files
Ionic CLI can build the frontend into static HTML/CSS/JavaScript files. These files can be uploaded to a host to be consumed by users on the web. Build artifacts are located in `./www`. To build from source, open terminal and run:
```bash
ionic build
```
***

## @TODO
2. Tasks
    i. Setup
        a. Clone, set up protected branches (dev, staging, master)
        b. NPM, Ionic CLI
        c. run tests (npm test), identify broken function, fix the function
        d. write tests for form validation and re-run tests
