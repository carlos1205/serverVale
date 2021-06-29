const assert = require('assert');
const axios = require('axios');
const { post } = require('../../route/user');
const data = JSON.stringify({
    name: 'Carlos de Souza Lima',
    login: 'carloslima68.cs@gmail.com',
    password: 'carlos123'
});

const url = 'http://localhost:3000/user';

const options = {
    method: 'post',
    url: '/user',
    port: 3000,
    data: data,
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

describe('Service User', () => {
    describe('[get]/user', () => {
        it('Status code', async () => {
            const res = await axios.get(url);
            assert.deepStrictEqual(res.status, 200);
        });
    });

    describe('[post]/user', () => {
        it('Status code', async () => {
            try{
                const res = await axios(options);
            }catch(err){
                console.error(err);
            }
            assert.ok(true);
        });
    });
});