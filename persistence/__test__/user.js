const assert = require('assert');
const {UserPersistence} = require('./../');
const {Arquivo} = require('./../../repository');

const USER_CADASTRAR = {
    login: "carloslima",
    email: "carlos@lima.com",
    password: "carlos123"
};

var ID;

describe("Persistence user", () => {
    before(async()=>{
        const data = [];
        const path = './persistence/user/user.json';
        await Arquivo.write(path, JSON.stringify(data));
    });

    describe('#createUsers(user): ', () => {
        it('Check retorno', async () => {
            const res = await UserPersistence.createUser(USER_CADASTRAR);
            ID = res.id;
            assert.deepStrictEqual(res.login, USER_CADASTRAR.login);
        });
    });

    describe('#getUsers(): ', () => {
        it('Check retorno', async () => {
            const [data] = await UserPersistence.getUsers();
            assert.deepStrictEqual(data.id, ID);
        });
    });
    
    describe('#getUsersPerLogin(login): ', () => {
        it('Check retorno', async () => {
            const data = await UserPersistence.getUserPerLogin(USER_CADASTRAR.login);
            assert.deepStrictEqual(data.email, USER_CADASTRAR.email);
        });
    });

    describe('#deleteUser(id): ', () => {
        it('Check retorno', async () => {
            const data = await UserPersistence.deleteUser(ID);
            assert.deepStrictEqual(data.length, 0);
        });
    });
});