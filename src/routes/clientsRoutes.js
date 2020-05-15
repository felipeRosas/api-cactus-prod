const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const clients = require('../controllers/clientsController');

router.get('/getClients', verifyToken, clients.getClients);
router.post('/getClientById', verifyToken, clients.getClientById);
router.post('/insertClient', verifyToken, clients.insertClient);
router.post('/updateClient', verifyToken, clients.updateClient);
router.post('/deleteClient', verifyToken, clients.deleteClient);

module.exports = router;