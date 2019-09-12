FROM node:8-alpine

WORKDIR /app

RUN git clone github.com/speakol-ads/element-tracker .

RUN npm i

ENTRYPOINT [ "node", "main.js" ]
