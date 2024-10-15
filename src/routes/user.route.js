const express = require('express');
const { addUserController, showForm, showAllUsersController} = require('../controllers/user.controller');
const router = require('express').Router();


router.get('/', showForm);
router.post('/home', addUserController);
router.get('/allUsers', showAllUsersController);
module.exports = router;



