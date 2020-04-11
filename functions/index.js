const functions = require('firebase-functions');

const express = require('express');

const apolloServer = require('./server');

const app = express();

apolloServer.applyMiddleware({ app, path: '/', cors: true });

exports.api = functions.https.onRequest(app);
