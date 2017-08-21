const express = require('express');
const router = express('Router');
const userController = require('../controllers/users');

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById)
router.post('/users', userController.createUser)
router.delete('/users/:id', userController.deleteUser)
router.put('/users/:id', userController.updateUser)


module.exports = router
