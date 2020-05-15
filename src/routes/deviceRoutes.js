const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const device = require('../controllers/deviceController');

router.get('/getDevices', verifyToken, device.getDevices);
router.post('/getDeviceById', verifyToken, device.getDeviceById);
router.post('/insertDevice', verifyToken, device.insertDevice);
router.post('/updateDevice', verifyToken, device.updateDevice);
router.post('/deleteDevice', verifyToken, device.deleteDevice);

module.exports = router;