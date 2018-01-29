# 37: Full Stack App
Description: **Lab 37 of Code Fellows JavaScript 401d19** </br>
Author: **Matthew LeBlanc** </br>
Date: **01/23/18**

## Features
This lab features a full stack application that uses react in the front-end and express in the backend. When it connects the two using a http post and get request to store account information and keep note that someone is logged into the app. Using bearer and basic authorization to create a token from the server.

## Tech/Framework Used
- react
- redux
- express
- node.js
- javascript
- Visual Studio Code

## Usage
1. `cd` into the lab-matt folder
1. `cd` into the backend folder
2. `npm install` the required dependency packages
1. setup a `.env` file with the following parameters:
```
PORT=3000 // <port number can be your choice>
MONGODB_URI=mongodb://localhost/live // <live can be replaced with your own local db>
CLOUD_SALT='andsomefries' // <or use personal string / number sequence>

// Twilio not currently needed in this state of the full-stack application
API_KEY=00000000000000000000  // <replace with your meetup api_key>
TWILIO_ACCOUNT_SID=0000000000000000000000000 // <replace with twilio account_sid>
TWILIO_AUTH_TOKEN=00000000000000000000000 // <replace with twilio auth_token>
TWILIO_NUMBER=0000000000 // replace with selected twilio_number
```
2. `npm run dbon` to start the server
4. run `nodemon -ignore log.json` or other methods to start up the server
1. `cd` into the frontend folder
2. `npm install` the required dependency packages
4. `npm run watch` to run a local server to use the front-end react
6. connect to `http://localhost:8080`

3. `npm run lint` from either frontend/  or  backend/ directory to run eslint
3. `npm run build` to run the babel/sass transpiler from the front-end

## Dependencies (backend)
```
 "devDependencies": {
    "eslint": "^4.14.0",
    "jest": "^22.0.4"
  },
  "dependencies": {
    "aws-sdk-mock": "^1.7.0",
    "bcrypt": "^1.0.3",
    "body-parser": "^1.18.2",
    "cors": "^2.8.4",
    "crypto": "^1.0.1",
    "dotenv": "^4.0.0",
    "express": "^4.16.2",
    "faker": "^4.1.0",
    "fs-extra": "^5.0.0",
    "http-errors": "^1.6.2",
    "jsonwebtoken": "^8.1.0",
    "mongoose": "^5.0.0-rc0",
    "multer": "^1.3.0",
    "node-schedule": "^1.2.5",
    "superagent": "^3.8.2",
    "twilio": "^3.11.0",
    "winston": "^2.4.0"
  }
```

## Dependencies (frontend)
```
"dependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.17",
    "css-loader": "^0.28.9",
    "dotenv": "^4.0.0",
    "extract-text-webpack-plugin": "^3.0.2",
    "html-webpack-plugin": "^2.30.1",
    "node-sass": "^4.7.2",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-redux": "^5.0.6",
    "react-router-dom": "^4.2.2",
    "redux": "^3.7.2",
    "resolve-url-loader": "^2.2.1",
    "sass-loader": "^6.0.6",
    "style-loader": "^0.19.1",
    "superagent": "^3.8.2",
    "uglifyjs-webpack-plugin": "^1.1.6",
    "uuid": "^3.2.1",
    "webpack": "^3.10.0",
    "webpack-dev-server": "^2.11.0"
  },
  "devDependencies": {
    "enzyme": "^3.3.0",
    "enzyme-adapter-react-16": "^1.1.1",
    "eslint": "^4.15.0",
    "eslint-plugin-react": "^7.5.1",
    "jest": "^22.1.2",
    "redux-devtools-extension": "^2.13.2"
  }
```