const jwt = require('jsonwebtoken');
const userModel = require('./../models/userModel');
const bcrypt = require('bcryptjs');

var userController = {};

userController.signIn = async (req, res) => {
    const { email, pass } = req.body;
    var user = await userModel.validateMail(email);
    var comparation = await verifyPass(pass, user.password);
    if(user !== null){
        if(comparation){
            delete user.password;
            const token = jwt.sign({id: user.idUser}, process.env.APIKEY, {
                expiresIn: 86400
            });
            return res.status(200).json({
                data: user,
                auth: true,
                token: token
            });
        }else{
            return res.status(400).json({
                error: 0,
                auth: false
            })
        }
    }else{
        return res.status(400).json({
            error: 0,
            auth: false
        })
    } 
}

userController.getUser = async (req, res) => {
    var user = await userModel.getUser();
    if(user !== null){
        return res.status(200).json(user);
    } else {
        return res.status(400).json({ error: 0 });
    }
}

userController.insertUser = async (req, res) => {
    const { email, pass, idClient, idTypeUser } = req.body;
    var hashPass = await encryptPass(pass);
    var data = [email, hashPass, idClient, idTypeUser];
    var user = await userModel.insertUser(data);
    if( user ){
        return res.status(200).json( user );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

async function encryptPass(pass){
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(pass, salt);
}

async function verifyPass(pass, passBD) {
    return bcrypt.compare(pass, passBD)
}

module.exports = userController;