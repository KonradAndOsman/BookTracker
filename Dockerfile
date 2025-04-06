# syntax=docker/dockerfile:1
FROM cimg/node:16.20.2
ENV NODE_ENV=production
RUN npm install -g npm@latest
COPY ["package.json", "package-lock.json*", "./"]
RUN sudo npm install
COPY . .
CMD [ "npm", "start" ]