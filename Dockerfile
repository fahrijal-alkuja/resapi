FROM node:8.11.1-alpine

LABEL maintainer="rizal.alkuja@gmail.com"

WORKDIR /resApi

COPY . /resApi
COPY package.json /resApi/package.json
VOLUME [ "/restApi/data/db/database" ]
RUN npm install -g nodemon
RUN npm install
COPY . /resApi

ENV NODE_ENV=development
ENV DATABASE=mongodb://mongodb:27017/dbayok
ENV PORT=3000

EXPOSE 3000

CMD [ "nodemon", "-L", "/restApi/server.js" ]