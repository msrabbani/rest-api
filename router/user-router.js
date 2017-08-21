const express = require('express');
const router = express('Router');
const userController = require('../controllers/users');
const middleware = require('../helper/auth')

router.post('/signup', userController.signUpUser)
router.post('/signin', userController.signInUser)
router.get('/users', middleware.adminAuth, userController.getAllUsers);
router.get('/users/:id', middleware.nonAdminAuth,userController.getUserById)
router.post('/users', middleware.adminAuth,userController.createUser)
router.delete('/users/:id', middleware.adminAuth,userController.deleteUser)
router.put('/users/:id', middleware.nonAdminAuth,userController.updateUser)

module.exports = router
