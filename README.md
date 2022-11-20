## Product feedback APi

### Table of Contents

- [Prerequisites](#Prerequisites)
- [Tech Stack](#Tech-Stack)
- [Getting Started](#Getting-Started)
- [Project Structure](#Project-Structure)

#

### Prerequisites

- <img src="./readme/nodejs.png" width="25" style="top: 8px" /> Node JS @16.X and up
- <img src="./readme/npm.png" width="25" style="top: 8px" /> npm @8 and up

#

### Tech Stack

- <img src="./readme/npm.png" width="25" style="top: 8px" /> body-parser @ 1.20.0 - Node.js body parsing middleware
- <img src="./readme/dotenv.png" width="25" style="top: 8px" /> dotenv @ 16.0.3 - zero-dependency module that loads environment variables from a .env file
- <img src="./readme/express.png" width="25" style="top: 8px" /> express @ 4.18.1 - web framework for node
- <img src="./readme/joi-image.png" width="25" style="top: 8px" /> joi @ 17.6.2 - schema description language and data validator for JavaScript
- <img src="./readme/mongoDB.png" width="25" style="top: 8px" /> mongodb @ 4.10.0 - document database
- <img src="./readme/mongoose.png" width="25" style="top: 8px" /> mongoose @ 6.6.3 - MongoDB object modeling tool
- <img src="./readme/Swagger-logo.png" width="25" style="top: 8px" /> swagger @ 4.5.1 - module provides tools for designing and building Swagger-compliant APIs entirely in Node.js
- <img src="./readme/mongoose.png" width="25" style="top: 8px" /> yaml @ 0.3.0 - yaml is a definitive library for YAML, the human friendly data serialization standard

#

### Getting Started

1. First of all you need to clone app repository from github:

```
git clone https://github.com/nikanoza/product-feedback-api.git
```

2. Next step requires install all the dependencies.

```
npm install
```

3. Also you need to create .env file where copy information from .env.example file

```
cp .env.example .env
```

4. To create your own database, need to create new local connection, host would be localhost.
   also you need to replace variables values in .env file, or you can generate mongo atlas url with user and password

#

### Project Structure

```
|--- src
|   |--- config # configuration files
|   |---|--- mongo.ts # perform mongoDb connection
|   |---|--- swagger.yaml # swagger configuration file
|   |--- controllers # functions for routes
|   |--- middlewares # extra helper middleware functions
|   |---|--- auth-middleware.js # function to protect some routes
|   |---|--- swagger-middleware.js # function to build and serve swagger
|   |--- models # mongoose models for mongoDb
|   |--- routes # project routes
|   |--- schemas # Joi validation schema files
|   |--- server.ts # main file
- package.json # dependency manager configurations
```
