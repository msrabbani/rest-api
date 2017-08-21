const express = require('express');
const router = express('Router');
const userController = require('../controllers/users');
const middleware = require('../helper/auth')

router.get('/users', middleware, userController.getAllUsers);
router.get('/users/:id', userController.getUserById)
router.post('/users', userController.createUser)
router.delete('/users/:id', userController.deleteUser)
router.put('/users/:id', userController.updateUser)

// router.post('/signup', userController.signupUser)
router.post('/signin', userController.signInUser)

module.exports = router
