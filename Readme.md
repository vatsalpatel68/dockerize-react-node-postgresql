# React-node-postgresql-docker.

## setup
 * Go to the directory and write command `docker-compose build`. (This command is required for the first time).
 * After that use `docker-compose up` for up the containers.
 * This Demo uses volumes. so, It will update on code change.
 * We use nodemon for live source code update in node app.

 ## React app.
 * It has a production build as well as development server. In development it will update the code in container when code change in src folder.
 * When you go for production use Dockerfile.
 ```
 # build environment
FROM node:12-alpine as build
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```
* on production app will run on port **80** Otherwise run on port **3000**.

## Node app

* It uses nodemon for live source code update.
* When you go for production update change last line of Dockerfile to
`CMD ["npm","run","start"]`

## postgresql.

* Docs of postgresql is inside postgres folder.