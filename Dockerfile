FROM node:14

# Install ImageMagick
RUN apt-get update && apt-get install -y imagemagick

# Copy your project files
WORKDIR /app
COPY . /app

# Install project dependencies
RUN npm install

# Run the application
CMD ["npm", "start"]
