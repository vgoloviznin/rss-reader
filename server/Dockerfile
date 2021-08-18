FROM node:lts-fermium
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
RUN npm build
COPY . .
RUN npm start