
## Description

Service for  users to manage and retrieve data for different entities for the service Musicify.

Before running this application you need to install microservice's repository:
[here](https://github.com/rolling-scopes-school/node-graphql-service)

## Installation

```bash
$ npm install
```

## Running the app

if you use docker conteiner, run command:
```
docker run -d  --name mongo-on-docker  -p 27888:27017 -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

if you have problems with querys or mutation code for Apollo-playground, you could find text examples in folder "playground-scripts"