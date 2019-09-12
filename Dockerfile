FROM node:8-alpine

WORKDIR /app

RUN apk update && apk add git
RUN git clone https://github.com/speakol-ads/element-tracker .
RUN npm install

ENTRYPOINT [ "node", "main.js" ]
