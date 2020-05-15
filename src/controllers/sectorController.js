const jwt = require('jsonwebtoken');
const sectorModel = require('./../models/sectorModel');

var sectorController = {};

sectorController.getSector = async (req, res) => {
    var sector = await sectorModel.getSector();
    if(sector !== null){
        return res.status(200).json(sector);
    } else {
        return res.status(400).json({ error: 0 });
    }
}

sectorController.getSectorById = async (req, res) => {
    const { idSector } = req.body;
    var sector = await sectorModel.getSectorById( idSector );
    if(sector !== null){
        return res.status(200).json( sector );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

sectorController.getSectorByIdStore = async (req, res) => {
    const { idStore } = req.body;
    var sector = await sectorModel.getSectorByIdStore( idStore );
    if(sector !== null){
        return res.status(200).json( sector );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

sectorController.insertSector = async (req, res) => {
    const { name, level, sectorPlan, idStore } = req.body;
    var data = [ name, level, sectorPlan, idStore ];
    var sector = await sectorModel.insertSector(data);
    if( sector ){
        return res.status(200).json( sector );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

sectorController.updateSector = async (req, res) => {
    const { idSector, name, level, sectorPlan, idStore } = req.body;
    var data = [ idSector, name, level, sectorPlan, idStore ];
    var sector = await sectorModel.updateSector(data);
    if( sector ){
        return res.status(200).json( sector );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

sectorController.deleteSector = async (req, res) => {
    const { idSector } = req.body;
    var sector = await sectorModel.deleteSector(idSector);
    if( sector ){
        return res.status(200).json( sector );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

module.exports = sectorController;