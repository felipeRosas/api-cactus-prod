const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const userController = require('../controllers/userController');

router.post('/signIn', userController.signIn);
router.post('/insertUser', verifyToken, userController.insertUser);
router.get('/getUser', verifyToken, userController.getUser);

module.exports = router;
