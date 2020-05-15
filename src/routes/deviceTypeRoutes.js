const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const deviceType = require('../controllers/deviceTypeController');

router.get('/getDeviceType', verifyToken, deviceType.getDeviceType);
router.post('/getDeviceTypeById', verifyToken, deviceType.getDeviceTypeById);
router.post('/insertDeviceType', verifyToken, deviceType.insertDeviceType);
router.post('/updateDeviceType', verifyToken, deviceType.updateDeviceType);
router.post('/deleteDeviceType', verifyToken, deviceType.deleteDeviceType);

module.exports = router;