const {UserPersistence} = require('./../../persistence');
const {Crypt} = require('./../../util');

const getUser = async (req, res) => {
    const result = await UserPersistence.getUsers();
    res.send(result);
}

const getUserPerLogin = async (req, res) => {
    const result = await UserPersistence.getUserPerLogin(req.params.login);
    res.send(result);
}

const createUser = async (req, res) => {
    //nome, login, senha
    const pass = await Crypt.generate(req.body.password);
    const newUser = {
        name: req.body.name,
        login: req.body.login,
        password: pass
    }

    const result = await UserPersistence.createUser(newUser);

    res.send(result);
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