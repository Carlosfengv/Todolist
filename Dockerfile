FROM node:latest

ADD package-lock.json /package-lock.json
ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN npm install
RUN npm start

WORKDIR /
ADD . /

EXPOSE 3000

RUN npm build
