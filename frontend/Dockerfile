
FROM node:14 AS development

WORKDIR /arang/frontend/src/app

COPY package*.json ./

RUN npm install
RUN npm install react-scripts@3.0.1 -g

COPY . .

RUN npm run build

EXPOSE 3010
