const fs = require('fs');

const get = async (path, collection) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, collection, (err, data) => {
            if(err)
                reject('erro ao abrir arquivo');

            const res = JSON.parse(data);
            resolve(res);
        });
    });
}

const write = async (path, info) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, info, (err, data)=>{
            if(err)
                reject('erro ao abrir arquivo');
            
            resolve(data);
        });
    })
}

module.exports = {get, write};