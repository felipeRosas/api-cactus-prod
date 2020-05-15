const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const current = require('../controllers/currentController');

router.get('/getCurrents', verifyToken, current.getCurrents);
router.post('/getCurrentById', verifyToken, current.getCurrentById);
router.post('/getCurrentBetweenDates', verifyToken, current.getCurrentBetweenDates);
router.post('/insertCurrent', verifyToken, current.insertCurrent);
router.post('/updateCurrent', verifyToken, current.updateCurrent);
router.post('/deleteCurrent', verifyToken, current.deleteCurrent);

module.exports = router;