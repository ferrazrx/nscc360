# USE NODE ALPINE IMAGE
FROM node:latest as builder
# SET THE WORK DIRECTORY FOR THE APPLICATION
WORKDIR /user/app
# COPY PACKAGE TO THE APPLICATION DIRECTORY
COPY ./package.json .
# INSTALL ALL DEPENDENCIES
RUN npm i
# COPY EVERYTHING FROM CURRENT DIRECTORY TO THE APPLICATION DIRECTORY 
COPY . .
# BUILD APPLICATION
RUN npm run bundle
#INSTALL NGINX
FROM nginx
#COPY FILES FROM NODE IMAGE TO NGINX
COPY --from=builder /user/app/build /usr/share/nginx/html
COPY ./static_assets /usr/share/nginx/html/static_assets
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'