const jwt = require('jsonwebtoken');

const { jwtKey } = require('../secret/secret');



const authenticate = (req, res, next) => {
    const token = req.get('Authorization');
    // const token = req.headers.authorization;
    
    // console.log(req)
    // console.log(req.headers.authorization)
    if (token) {
        jwt.verify(token, jwtKey, (err, decoded) => {
            if(err) 
            return res.status(401).json(err);

            // req.decoded = decoded;
            req.decodedJwt = decoded;
            next();
        });
    } else {
        return res.status(401).json({
            error: 'No token provided, must be set on the Authorization Header',
        });
    }
}

module.exports = {
    authenticate
};