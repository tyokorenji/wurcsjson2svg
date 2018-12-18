FROM node:8.3.0-alpine
RUN mkdir ./app
WORKDIR /app
ADD ./dist/app.bundle.js /app
EXPOSE 1337
CMD node ./app.bundle.js
