'use strict';
// Load dependencies
const express = require('express');
const http = require('http');
const path = require('path');
const morgan = require("morgan");

// Get our API routes
const api = require('./routes/api');

const app = express();

//Middleware to serve static files of Angular2 app
app.use(express.static(path.join(__dirname, '../dist')));

// use morgan to log requests to the console
app.use(morgan('dev'));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3001';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

server.listen(port);
console.log('Serving classic-cars on localhost:3001');