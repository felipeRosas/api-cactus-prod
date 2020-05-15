const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const sensor = require('../controllers/sensorController');

router.get('/getSensor', verifyToken, sensor.getSensor);
router.post('/getSensorById', verifyToken, sensor.getSensorById);
router.post('/getAllSensorPosition', verifyToken, sensor.getAllSensorPosition);
router.post('/insertSensor', verifyToken, sensor.insertSensor);
router.post('/updateSensor', verifyToken, sensor.updateSensor);
router.post('/updateSensorPosition', verifyToken, sensor.updateSensorPosition);
router.post('/deleteSensor', verifyToken, sensor.deleteSensor);

/* Measures */
router.post('/getSensorPotencyByDay', verifyToken, sensor.getSensorPotencyByDay);
router.post('/getSensorPotencyByMonth', verifyToken, sensor.getSensorPotencyByMonth);
router.post('/getPotencyMonthByStore', verifyToken, sensor.getPotencyMonthByStore);
router.post('/getEnergyCost', verifyToken, sensor.getEnergyCost);
router.post('/getPotencyYearByStore', verifyToken, sensor.getPotencyYearByStore);
router.post('/getPotencyWeekByStore', verifyToken, sensor.getPotencyWeekByStore);
router.post('/getPotencyDailyByStore', verifyToken, sensor.getPotencyDailyByStore);
router.post('/getPotencyYearByStoreTotal', verifyToken, sensor.getPotencyYearByStoreTotal);

module.exports = router;