'use strict';

const express = require('express');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/admin', (req, res) => {
  var response =  'Hello From the ADMIN Front End: Java app #2<br />';

  var backend = 'http://python:5000';
  var request = require('sync-request');
  var backres = request('GET', backend);

  response = response + backres.getBody();


  res.send(response);
});



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
