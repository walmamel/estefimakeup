const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const {newContact} = require('../middleware/contacts');

router.post('/newcontact',[
    check('fname', 'Your fullname is required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('message', 'Please enter a message').not().isEmpty()
],newContact)

module.exports = router;