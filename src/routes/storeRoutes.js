const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const store = require('../controllers/storeController');

router.get('/getStore', verifyToken, store.getStore);
router.post('/getStoreById', verifyToken, store.getStoreById);
router.post('/getStoreByIdClient', verifyToken, store.getStoreByIdClient);
router.post('/insertStore', verifyToken, store.insertStore);
router.post('/updateStore', verifyToken, store.updateStore);
router.post('/deleteStore', verifyToken, store.deleteStore);

module.exports = router;