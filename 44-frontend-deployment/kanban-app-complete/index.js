'use strict';

const express = require('express');
const app = express();

// vinicio - static files get loaded
app.use(express.static(`${__dirname}/build`));

// vinicio - everything else is routed to index.html
//           the front-end should take care of 404s
app.get('*',(request,response) => 
  response.sendFile(`${__dirname}/build/index.html`));

app.listen(process.env.PORT, () => {
  console.log('__SERVER_UP__',process.env.PORT);
});