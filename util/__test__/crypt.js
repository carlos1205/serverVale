const assert = require('assert');
const crypt = require('./../crypt');

describe('Crypt', () => {
    describe('#Generate()', ()=>{
        it('Comparar senhas: ', async () => {
            const senha = "MinhaSenhaSecreta";
            const pass = await crypt.generate(senha);
            const res = await crypt.compare(pass, senha);

            assert.deepStrictEqual(res, true);
        });
    });
});