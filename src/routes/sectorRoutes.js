const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const sector = require('../controllers/sectorController');

router.get('/getSector', verifyToken, sector.getSector);
router.post('/getSectorById', verifyToken, sector.getSectorById);
router.post('/getSectorByIdStore', verifyToken, sector.getSectorByIdStore);
router.post('/insertSector', verifyToken, sector.insertSector);
router.post('/updateSector', verifyToken, sector.updateSector);
router.post('/deleteSector', verifyToken, sector.deleteSector);

module.exports = router;