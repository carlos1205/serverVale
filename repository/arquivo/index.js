const fs = require('fs');

const get = async (path, collection) => {
    if(path.indexOf('.json') == -1)
        throw new Error('illegal operation on a directory, read');

    return new Promise((resolve, reject) => {
        fs.readFile(path, collection, (err, data) => {
            if(err)
                reject(err);

            const res = JSON.parse(data);
            resolve(res);
        });
    });
}

const write = async (path, info) => {
    if(path.indexOf('.json') == -1)
        throw new Error('illegal operation on a directory, write');

    return new Promise((resolve, reject) => {
        fs.writeFile(path, info, (err, data)=>{
            if(err)
                reject(err);
            
            resolve(data);
        });
    })
}

module.exports = {get, write};