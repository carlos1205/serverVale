const express = require('express');
const router = express.Router();
const {Auth} = require('./../../service');

router.post('/login', Auth.login);
router.get('/logout', Auth.logout);

module.exports = router;