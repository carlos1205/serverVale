const express = require('express');
const { User } = require('../../service');
const router = express.Router();

router.get('/user', User.getUser);
router.post('/user', User.createUser);
router.delete('/user', User.deleteUser);
router.get('/user/:login', User.getUserPerLogin);

module.exports = router;