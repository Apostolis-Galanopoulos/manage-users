# Stage 1
FROM node as build-step
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
RUN npm run build

# Stage 2
FROM nginx
COPY /nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /usr/src/app/dist/manage-users /usr/share/nginx/html
