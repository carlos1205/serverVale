require('dotenv-safe').config();
const express = require('express');
const {User, Auth} = require('./service');

const app = express();
app.use(express.json());

const port = 3000;

const get =  (req, res) => {
    res.send('Hello World');
};

app.get('/user', User.getUser);
app.post('/user', User.createUser);
app.delete('/user', User.deleteUser);
app.get('/user/:login', User.getUserPerLogin);

app.get('/', get);
app.post('/login', Auth.login);
app.get('/logout', Auth.logout);

app.listen(port);