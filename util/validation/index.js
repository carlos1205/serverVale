
const isValid = ({login, name, password}) => {
    var result = name.length > 0 ;
    result = login.length > 0 && result;
    result = password.length > 0 && result;

    return result;
};

module.exports = {isValid};