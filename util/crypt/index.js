const bcrypt = require('bcrypt');

const generate = async (str) => {
    if(typeof(str) !== "string")
        throw new TypeError('O parametro não é uma string');

    const salt = await bcrypt.genSalt(10);
    const converted = await bcrypt.hash(str, salt);

    return converted;
};

const compare = async ( hash, str ) => {
    if(typeof(str) !== "string" && typeof(hash) !== "string")
        throw new TypeError('Os parametro não são do tipo string');
    
    const salt = await bcrypt.genSalt(10);
    const actual = await bcrypt.hash(str, salt);

    return (actual === hash ? true : false);
} 

module.exports = {generate, compare};