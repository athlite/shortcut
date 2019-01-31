FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn run webpack -p

CMD ["node", "server"]