# syntax=docker/dockerfile:1
FROM cimg/node:22.9.0

# Set environment variables
ENV NODE_ENV=production

# Set up user-specific npm installation to avoid permission issues
ENV NPM_CONFIG_PREFIX=/home/circleci/.npm-global
RUN npm install -g npm@latest --unsafe-perm
ENV PATH=$PATH:/home/circleci/.npm-global/bin

# Copy package files with correct ownership and install dependencies
COPY --chown=circleci:circleci ["package.json", "package-lock.json*", "./"]
RUN npm install --production --unsafe-perm

# Copy the rest of the application files with correct ownership
COPY --chown=circleci:circleci . .

# Start the application
CMD ["npm", "start"]