FROM node 
# node without a version specified means the latest version
# latest version of node will be fetched from dockerhub's pre defined images
# FROM node:20 means we want node version 20 specifically
WORKDIR /myapp
# WORKDIR creates a new working directory for keeping files in the container
COPY package*.json ./
#COPY . .
# "COPY . /myapp" would yield same results as above command because we've already signified current working directory
# first . signifies all files of the current project need to be copied to /myapp
RUN npm install
# while giving this code to other teams, we remove the 'node_modules' folder to compress the project's size
# so we use above command to install all the dependencies before running the actual code
COPY . .
EXPOSE 5173
CMD ["npm","run","dev"]
#CMD ["npm","start"]
# used instead of command "RUN npm start" in order to start the server and for making container alive