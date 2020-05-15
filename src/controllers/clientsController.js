const jwt = require('jsonwebtoken');
const clientsModel = require('./../models/clientsModel');

var clientsController = {};

clientsController.getClients = async (req, res) => {
    var clients = await clientsModel.getClients();
    if(clients !== null){
        return res.status(200).json(clients);
    } else {
        return res.status(400).json({ error: 0 });
    }
}

clientsController.getClientById = async (req, res) => {
    const { idClient } = req.body;
    var client = await clientsModel.getClientById( idClient );
    if(client !== null){
        return res.status(200).json( client );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

clientsController.insertClient = async (req, res) => {
    const { name, rut, dv, telephone, mail } = req.body;
    var data = [ name, rut, dv, telephone, mail ];
    var client = await clientsModel.insertClient(data);
    if( client ){
        return res.status(200).json( client );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

clientsController.updateClient = async (req, res) => {
    const { idClient, name, rut, dv, telephone, mail } = req.body;
    var data = [ idClient, name, rut, dv, telephone, mail ];
    var client = await clientsModel.updateClient(data);
    if( client ){
        return res.status(200).json( client );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

clientsController.deleteClient = async (req, res) => {
    const { idClient } = req.body;
    var client = await clientsModel.deleteClient(idClient);
    if( client ){
        return res.status(200).json( client );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

module.exports = clientsController;