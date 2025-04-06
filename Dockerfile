# syntax=docker/dockerfile:1
FROM cimg/node:20.14.0
ENV NODE_ENV=production
RUN npm install -g npm@latest
COPY ["package.json", "package-lock.json*", "./"]
RUN sudo npm install
COPY . .
CMD [ "npm", "start" ]