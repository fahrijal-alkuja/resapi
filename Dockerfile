FROM node:8.11.1-alpine
LABEL       maintainer="@lkuja07"
WORKDIR /var/www/app
COPY package.json package-lock.json  ./
RUN npm install
RUN npm install -g nodemon
COPY . ./
EXPOSE  $PORT
CMD [ "nodemon", "-L", "app/server.js" ]

ENV NODE_ENV=development
ENV DATABASE=mongodb://mongo:27017/dbayok
ENV PORT=3000
