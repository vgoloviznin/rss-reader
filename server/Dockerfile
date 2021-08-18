FROM node:lts-fermium
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install -g typescript
RUN npm install
RUN npm build
COPY . .
EXPOSE 3000
CMD [ "node", "./dist/app.js" ]