# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

EXPOSE 4000

# add app
COPY big-data-processing-toolbox-app ./

# start app
CMD ["npm", "run", "start:prod"]