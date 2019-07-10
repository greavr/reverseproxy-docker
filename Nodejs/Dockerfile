#Based on sample container found here: https://nodejs.org/de/docs/guides/nodejs-docker-webapp/

FROM node:10

# Create app directory
WORKDIR /usr/src/app

COPY code/package*.json ./

RUN npm install

COPY code/ .

EXPOSE 8080

CMD [ "node", "server.js" ]
