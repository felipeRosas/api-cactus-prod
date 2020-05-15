const jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
    const token = req.headers['x-access-token'];
    if(!token){
        return res.status(401).json({
            auth: false,
            message: 'No Token Provider'
        });
    } else{
        const decodedToken = jwt.verify(token, process.env.APIKEY);
        req.idUser = decodedToken.id;
        next();
    }
}

module.exports = verifyToken;