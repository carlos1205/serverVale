const {UserPersistence} = require('./../../persistence');
const {Crypt, Validation} = require('./../../util');

const getUser = async (req, res) => {
    const result = await UserPersistence.getUsers();
    res.send(result);
}

const getUserPerLogin = async (req, res) => {
    const result = await UserPersistence.getUserPerLogin(req.params.login);
    res.send(result);
}

const createUser = async (req, res) => {
    const newUser = {
        name: req.body.name,
        login: req.body.login,
        password: req.body.password
    }

    if(!Validation.isValid(newUser)){
        res.status(400).send('Invalid parameters');
        return;
    }

    newUser.password = await Crypt.generate(newUser.password);
    const result = await UserPersistence.createUser(newUser);

    res.status(201).send(result);
}

const deleteUser = async (req, res) => {
    const result = await UserPersistence.deleteUser(req.body.id);
    res.send(result);
}

module.exports = {
    getUser,
    getUserPerLogin,
    createUser,
    deleteUser
};