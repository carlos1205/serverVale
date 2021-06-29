const assert = require('assert');
const {Validation} = require('./..');

const USER_TEST = {
    login: 'carlos@lima.com',
    name: 'Carlos Lima',
    password: 'Ca120599'
};

const USER_TEST_WITHOUT_PASSWORD = {
    login: 'carlos@lima.com',
    name: 'Carlos Lima',
    password: ''
};

const USER_TEST_WITHOUT_LOGIN = {
    login: '',
    name: 'Carlos Lima',
    password: 'Ca120599'
};

const USER_TEST_WITHOUT_NAME = {
    login: 'carlos@lima.com',
    name: '',
    password: 'Ca120599'
};

describe('Util validation: ', () => {
    describe('#isValid(): ', () => {
        it('valid (true)', () => {
            const res = Validation.isValid(USER_TEST);
            assert.deepStrictEqual(res, true);
        });

        it('valid (false) without name', () => {
            const res = Validation.isValid(USER_TEST_WITHOUT_NAME);
            assert.deepStrictEqual(res, false);
        });

        it('valid (false) without login', () => {
            const res = Validation.isValid(USER_TEST_WITHOUT_LOGIN);
            assert.deepStrictEqual(res, false);
        });

        it('valid (false) without password', () => {
            const res = Validation.isValid(USER_TEST_WITHOUT_PASSWORD);
            assert.deepStrictEqual(res, false);
        });
    });
});