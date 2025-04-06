# syntax=docker/dockerfile:1
FROM cimg/node:22.9.0

# Upgrade npm to the latest version
RUN npm install -g npm@latest --unsafe-perm

# Set environment variables
ENV NODE_ENV=production

# Copy package files and install dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --unsafe-perm

# Copy the rest of the application files
COPY . .

# Start the application
CMD ["npm", "start"]