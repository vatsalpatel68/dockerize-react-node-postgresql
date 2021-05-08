#Development environment.
FROM node:12-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","run", "start"]

# # build environment
# FROM node:12-alpine as build
# WORKDIR /app
# COPY . .
# RUN yarn
# RUN yarn build

# # production environment
# FROM nginx:stable-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]