`use strict`;
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { listenerCount } = require('process');
const { Console } = require('console');
const { prototype } = require('events');
const { Module } = require('module');

const app = express();
app.use(cors);


function start(PORT) {
    app.listen(PORT, console.log(`the server is start for port ${PORT}`));
}

module.exports = {
    app: app,
    start: start
}