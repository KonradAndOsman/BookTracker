# syntax=docker/dockerfile:1
FROM cimg/node:22.9.0

# Set environment variables
ENV NODE_ENV=production

# Set up user-specific npm installation to avoid permission issues
ENV NPM_CONFIG_PREFIX=/home/circleci/.npm-global
RUN npm install -g npm@latest --unsafe-perm
ENV PATH=$PATH:/home/circleci/.npm-global/bin

# Copy package files and install dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --unsafe-perm

# Copy the rest of the application files
COPY . .

# Start the application
CMD ["npm", "start"]