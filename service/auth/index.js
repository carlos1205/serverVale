require('dotenv-safe').config();
const jwt = require('jsonwebtoken');

const login = (req, res) => {
    const user = req.body.user;
    const pass = req.body.password;

    if(user !== "carloslima" || pass !== "carlos123")
        return res.status(500).json({message: 'Login inválido!'});

    const id = 1;
    const token = jwt.sign({id}, process.env.SECRET, {
        expiresIn: 300
    });
    return res.json({auth: true, token: token});    
};

const logout = (req, res) => {
    res.json({ auth: false, token: null});
}

module.exports = {
    login,
    logout
};