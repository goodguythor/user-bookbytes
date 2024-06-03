const express = require('express');
const userController = require('../controllers/user.js');
const router = express.Router();

router.get('/users', userController.getAllUser);
router.get('/users/:userId', userController.getUser);
router.post('/users/:userId', userController.updateUser);
router.post('/users', userController.createUser);
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;