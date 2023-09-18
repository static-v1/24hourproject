# setup basic dockerfile to start the dev of the project
# this can be expanded upon as the project increases in scope and needs more dependencies/technologies down the line

# using nginx as base web server, could be replaced with any
FROM nginx:1.25.2-alpine

# simple copy initial workspace files into the right folder to be served
COPY . /usr/share/nginx/html

# expose port from container, can be modified to accomodate ssl, etc. in future
EXPOSE 80