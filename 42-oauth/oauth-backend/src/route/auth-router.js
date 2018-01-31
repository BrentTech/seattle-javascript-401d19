'use strict';

const {Router} = require('express');
const jsonParser = require('body-parser').json();
const Account = require('../model/account');
const httpErrors = require('http-errors');// vinicio - might refactor this to HttpErrors
const logger = require('../lib/logger');
const superagent = require('superagent');

const basicAuthMiddleware = require('../lib/basic-auth-middleware');
const GOOGLE_OAUTH_URL = 'https://www.googleapis.com/oauth2/v4/token';
const OPEN_ID_URL = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';



const authRouter = module.exports = new Router();


authRouter.get('/oauth/google',(request,response,next) => {
  //vinicio - we are expecting a 'code'
  if(!request.query.code){ // vinicio - step 3 of the process
    response.redirect(process.env.CLIENT_URL);
  } else { // vinicio - we have a code
    logger.log('info',{code : request.query.code});
    return superagent.post(GOOGLE_OAUTH_URL)
      .type('form')
      .send({
        code: request.query.code,
        grant_type: 'authorization_code',
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: `${process.env.API_URL}/oauth/google`,// vinicio - option to redirect somewhere else
      })
      .then(response => {
        logger.log('info','Back from GOOGLE_OAUTH_URL');
        if(!response.body.access_token)
          throw new Error('no access token');
        
        return response.body.access_token;
      })
      .then(accessToken => { // vinicio - ready to go to step 4
        logger.log('info','Getting OPEN_ID_URL');
        return superagent.get(OPEN_ID_URL)
          .set('Authorization', `Bearer ${accessToken}`);
      })
      .then(response => {
        logger.log('info','Back from OPEN_ID_URL');
        logger.log('info',{profile: response.body});
        // vinicio - at this point we have a Google + / Open ID profile
        return Account.handleGoogleAuth(response.body); // vinicio - step five
      })
      .then(account => account.createToken())
      .then(token => {
        // vinicio - step 5
        // vinicio - working wit hthe original response
        response.cookie('X-401d19-OAuth-token',token);
        response.redirect(process.env.CLIENT_URL);
      })
      .catch(error => {
        logger.log('info',{error});
        response.cookie('X-401d19-OAuth-token','');
        response.redirect(process.env.CLIENT_URL + '?error=oauth');
      });
  }
});

authRouter.post('/signup',jsonParser,(request,response,next) => {
  new Account.createFromSignup(request.body)
    .then(user => user.createToken())
    .then(token => {
      response.cookie('X-401d19-OAuth-token',token);
      response.send(token);
    })
    .catch(next);
});

authRouter.get('/login',basicAuthMiddleware,(request,response,next) => {
  request.user.createToken()
    .then(token => {
      response.cookie('X-401d19-OAuth-token',token);
      response.send(token);
    })
    .catch(next);
});
