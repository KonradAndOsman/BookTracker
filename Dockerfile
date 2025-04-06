# syntax=docker/dockerfile:1
FROM cimg/node:22.9.0

# 1. Set up proper permissions (no sudo needed)
RUN mkdir -p /home/node/app && \
    chown -R node:node /home/node/app && \
    chown -R node:node /usr/local/lib/node_modules

# 2. Switch to node user
USER node

# 3. Set working directory
WORKDIR /home/node/app

# 4. Set environment variables
ENV NODE_ENV=production

# 5. Copy package files with correct ownership
COPY --chown=node:node ["package.json", "package-lock.json*", "./"]

# 6. Install production dependencies
RUN npm install --production

# 7. Copy application files with correct ownership
COPY --chown=node:node . .

# 8. Runtime command
CMD ["npm", "start"]