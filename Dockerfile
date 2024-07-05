# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.15.0

FROM node:${NODE_VERSION}-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock into the container
COPY package.json yarn.lock ./

# Install all dependencies including devDependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the source files into the image
COPY --chown=node:node . .

# Use production node environment only at runtime
ENV NODE_ENV=production

# Expose the port that the application listens on
EXPOSE 5173

# Run the application
CMD ["yarn", "run", "dev"]
