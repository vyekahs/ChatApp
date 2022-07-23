# Specify Node Version and Image
#Name Image deverlopment(can be anything)
FROM node:14 AS development

WORKDIR /arang/src/app

#Copy package-lock.json & packjage.json host to inside container working directory
COPY package*.json ./

#Install deps inside container
RUN npm install
# Bundle App Sources
COPY . .

RUN npm run build

EXPOSE 4010


####################
#### PRODUCTION ####
####################

# Specify Node Version and Image
#Name Image production(can be anything)
FROM node:14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /arang/src/app

#Copy package-lock.json & packjage.json host to inside container working directory
COPY --from=development /arang/src/app .

EXPOSE 4010

CMD [ "node","dist/main"]

