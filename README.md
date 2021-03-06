# RSS Reader

## Installing all the necessities

In both `client` and `server` folders run `npm i` to install all dependencies. 

## Running Apps

### Client

In the `client` folder run `npm run serve` command for the Vue app to start. The app will start on http://localhost:8080/.

### Server

Run `npm run build` command to build TS files, after that you can run `npm start` to start the API. By default it will run on port `3000`.

#### Heroku deployment

1. You need to have the docker image build locally: `docker build --tag rss-api .`
2. Run `heroku container:push web` to push the updated image
3. Run `heroku container:release web` to release the image on Heroku
4. Run `heroku open` to open the released API in your browser

Alternatively, you can run `npm run heroku-deploy`.

#### Running tests

Run `npm run test` to run the tests.

#### Running cordova

1. In the `client` folder run `cordova run browser` to open the app in the browser
2. In the `client` folder run `cordova run ios` to open the app in the iOS simulator