const jwt = require('jsonwebtoken');
const storeModel = require('./../models/storeModel');

var storeController = {};

storeController.getStore = async (req, res) => {
    var store = await storeModel.getStore();
    if(store !== null){
        return res.status(200).json(store);
    } else {
        return res.status(400).json({ error: 0 });
    }
}

storeController.getStoreById = async (req, res) => {
    const { idStore } = req.body;
    var store = await storeModel.getStoreById( idStore );
    if(store !== null){
        return res.status(200).json( store );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

storeController.getStoreByIdClient = async (req, res) => {
    const { idClient } = req.body;
    var store = await storeModel.getStoreByIdClient( idClient );
    if(store !== null){
        return res.status(200).json( store );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

storeController.insertStore = async (req, res) => {
    const { name, address, latitude, longitude, idClient } = req.body;
    var data = [ name, address, latitude, longitude, idClient ];
    var store = await storeModel.insertStore(data);
    if( store ){
        return res.status(200).json( store );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

storeController.updateStore = async (req, res) => {
    const { idStore, name, address, latitude, longitude, idClient } = req.body;
    var data = [ idStore, name, address, latitude, longitude, idClient ];
    var store = await storeModel.updateStore(data);
    if( store ){
        return res.status(200).json( store );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

storeController.deleteStore = async (req, res) => {
    const { idStore } = req.body;
    var store = await storeModel.deleteStore(idStore);
    if( store ){
        return res.status(200).json( store );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

module.exports = storeController;