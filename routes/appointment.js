const express = require("express");
const router = express.Router();
const  {busyHours,newAppointment,confirmEmail,rejectEmail} = require('../middleware/appointment');
const {check} = require('express-validator');
const Appointment = require('../models/Appointment');

//Probando
const sendemail = require('../middleware/sendEmail.js')

router.get('/busyhours/:day',busyHours);
router.get('/confirm/:id', confirmEmail);
router.get('/reject/:id', rejectEmail);

router.post('/newappointment',[
    check('numberpeoplemkup', 'Number of people to makeUp is required').isNumeric().not().isEmpty(),
    check('fname','Your full name is required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('phone', 'Enter a valid phone number').not().isEmpty(),
    check('address','Please enter a complete address').not().isEmpty()
],newAppointment);


 
module.exports = router;