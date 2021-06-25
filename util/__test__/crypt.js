const { AssertionError, fail } = require('assert');
const assert = require('assert');
const crypt = require('./../crypt');

describe('Util Crypt: ', () => {
    describe('#Generate(): ', () => {
        it('string com formato errado', async () => {
            const senha = 2;
            try {
                const pass = await crypt.generate(senha);
                fail('devia ter erro');
            } catch (err) {
                assert.deepStrictEqual('O parametro não é uma string', err.message);
            }
        });

        it('string vazia', async () => {
            const senha = "";
            try {
                const pass = await crypt.generate(senha);
                fail('devia ter erro');
            } catch (err) {
                assert.deepStrictEqual('A senha esta vazia', err.message);
            }
        });
    });
    describe('#Compare(): ', () => {
        it('Comparar senhas', async () => {
            const senha = "MinhaSenhaSecreta";
            const pass = await crypt.generate(senha);
            const res = await crypt.compare(pass, senha);

            assert.deepStrictEqual(res, true);
        });

        it('Comparar senhas erradas', async () => {
            const senha = "MinhaSenhaSecreta";
            const pass = await crypt.generate(senha);
            const res = await crypt.compare(pass, "aterceSahneSahniM");

            assert.deepStrictEqual(res, false);
        });

        it('Comparar senhas com string vazia', async () => {
            const senha = "MinhaSenhaSecreta";
            try {
                const pass = await crypt.generate(senha);
                const res = await crypt.compare(pass, "");
                fail('devia ter erro');
            } catch (err) {
                assert.deepStrictEqual('A senha esta vazia', err.message);
            }
        });

        it('Comparar senha com o tipo errado', async () => {
            const senha = "MinhaSenhaSecreta";
            try {
                const pass = await crypt.generate(senha);
                const res = await crypt.compare(pass, 2);
                fail('devia ter erro');
            } catch (err) {
                assert.deepStrictEqual('O parametro não é uma string', err.message);
            }
        });
    });
});