require('dotenv-safe').config();
const express = require('express');
const {users, auth} = require('./route');

const app = express();
app.use(express.json());

const port = 3000;

app.use(users);
app.use(auth);

app.listen(port);