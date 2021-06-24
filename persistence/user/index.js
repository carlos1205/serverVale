const {Arquivo} = require('./../../repository');
const { v4: uuidv4 } = require('uuid');

const getUsers = async () => {
    const path = "./persistence/user/user.json";
    const collection = "utf-8";
    const data = await Arquivo.get(path, collection);

    return data;
};

const getUserPerLogin = async (login) => {
    const path = "./persistence/user/user.json";
    const collection = "utf-8";
    
    const data = await Arquivo.get(path, collection);
    const [response] = data.filter(element => {
        return element.login === login
    });
    return response;
};

const createUser = async (user) => {
    const id = uuidv4();
    const path = "./persistence/user/user.json";
    user = {
        ...
        user,
        id
    }
    const users = await getUsers();
    users.push(user);

    await Arquivo.write(path, JSON.stringify(users));

    return user;
};

const deleteUser = async (id) => {
    var users = await getUsers();
    const path = "./persistence/user/user.json";
    users = users.filter((element) => {
        return element.id !== id;
    });

    await Arquivo.write(path,JSON.stringify(users));

    return users;
}; 

module.exports = {getUsers, getUserPerLogin, createUser, deleteUser};