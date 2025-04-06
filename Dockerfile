FROM cimg/node:14.21.3

# Install a compatible version of npm
RUN npm install -g npm@8

# Set environment variables
ENV NODE_ENV=production

# Copy package files and install dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

# Copy the rest of the application files
COPY . .

# Start the application
CMD ["npm", "start"]