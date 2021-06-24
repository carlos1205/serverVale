require('dotenv-safe').config();
const express = require('express');
const routes = require('./route');

const app = express();
app.use(express.json());

const port = 3000;

routes.map( route => {
    app.use(route);
});

app.listen(port);