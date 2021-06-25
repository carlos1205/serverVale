const { fail } = require('assert');
const assert = require('assert');
const {Arquivo} = require('./..');

const path = './repository/__test__/test.json';

describe("Repository arquivo: ",() => {
    before( async () => {
        const info = {
            text: "Hello World"
        };

        try{
            await Arquivo.write(path, JSON.stringify(info));
        }catch(err) {
            console.error(err.message);
        }
    });
    describe("#Get(): ", () => {
        it("Leitura", async () => {
            const collection = "utf-8";
            try{
                const data = await Arquivo.get(path, collection);
                assert.deepStrictEqual(data.text, "Hello World");
            }catch(err) {
                console.error('Error: ', err);
            }
        });

        it("Get path errado", async ()=>{
            const pathS = './repository/';
            const collection = "utf-8";
            try {
                const data = await Arquivo.get(pathS, collection);
                fail('devia ter erro');
            } catch (err) {
                assert.deepStrictEqual('illegal operation on a directory, read', err.message);
            }
        });
    });

    describe("#write(): ", () => {
        it("Write", async () => {
            const info = {
                text: "Bye"
            };

            const collection = "UTF-8";
            try{
                await Arquivo.write(path, JSON.stringify(info));
                const data = await Arquivo.get(path, collection);
                assert.deepStrictEqual(data.text, "Bye");
            }catch(err) {
                console.error(err.message);
                fail('error');
            }
        });

        it("Write path errado", async () => {
            const info = {
                text: "Bye"
            };
            const pathS = './repository/';
            const collection = "UTF-8";
            try{
                await Arquivo.write(pathS, JSON.stringify(info));
                const data = await Arquivo.get(path, collection);
                fail('devia ter erro');
            }catch(err) {
                assert.deepStrictEqual('illegal operation on a directory, write', err.message);
            }
        });
    });
});