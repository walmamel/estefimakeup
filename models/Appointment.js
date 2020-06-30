const mongoose = require("mongoose");

const  AppointmentSchema = mongoose.Schema({
    makeuptype:{
        type: String,
        require:true,
    },
    date: {
        type: String,
        require: true
        
    },
    numberpeoplemkup: {
        type: Number,
        require: true,
        min: 1
    },
    hours: {
        type: String,
        require: true, 
    },
    fullname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
        
    },
    phone: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    status: {
        type: String,
        required: true
    }

});
module.exports = mongoose.model('Appointment', AppointmentSchema);