FROM node:18

# Install ImageMagick
RUN apt-get update && apt-get install -y imagemagick

# Install project dependencies
RUN npm install

# Run the application
CMD ["npm", "run", "dev"]
