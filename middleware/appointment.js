const Appointment = require('../models/Appointment');
const {validationResult} = require('express-validator');
const sendEmail = require('./SendEmail2.js');

const busyHours = async (req,res,next) => {
    let day = req.params.day;
    let bHours = await Appointment.find({date: day},{"hours":true,"_id":false},(err,data) =>{
        if(err){
            throw err;
        }
        else{
            return data;
        }
    })
    let busyHoursArray = []
    bHours.forEach(element => {
        busyHoursArray.push(element.hours)
    });
    res.send(busyHoursArray);
}

const newAppointment = (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors)
        return res.json({error:true,errors:errors.array()});
    }else{
        let {makeuptype,date,numberpeoplemkup,hours,fname,email,phone,address} = req.body;

        let data = {
            makeuptype: makeuptype,
            date: date,
            numberpeoplemkup: numberpeoplemkup,
            hours: hours,
            fullname: fname,
            email: email,
            phone: phone,
            address: address,
            status: "pending"
        }

        let newAppointment = new Appointment(data)
    
        newAppointment.save()
        .then(response => {
            console.log(response);
            //--- funcion envio de emails a cliente
            
            let data = {
                fullname: response.fullname,
                date: response.date,
                numberofpeople: response.numberpeoplemkup,
                hours: response.hours,
                phone: response.phone,
                address: response.address
            }

            let options = {
                emailType: 'ReservReception',
                email: response.email,
                subject: 'EstefiMakeup Appointment Received',
                data: data
            }
            sendEmail(options);

            //funcion envio de emails a admin
            let data_admin = {
                makeuptype: response.makeuptype,
                date: response.date,
                numberofpeople: response.numberpeoplemkup,
                hours: response.hours,
                phone: response.phone,
                address: response.address,
                appointmentID: response._id,
                fullname: response.fullname

            }
            let options_admin = {
                emailType: 'ReservAdminRequest',
                    email: 'estefimakeupreplay@gmail.com', //Correo de estefi makeup 
                    subject: 'New Reserve Received',
                    data: data_admin
            }
            sendEmail(options_admin);
            res.send({error:false, msg: 'reserve saved'})
        }) 
        .catch(err => {

            console.log(err);
            res.status(400).send({msg: err})
        
        })

    }
           
}


//--- cambio status = confirmed
const confirmEmail= (req,res,next)=>{

    let id = req.params.id;

    Appointment.findByIdAndUpdate(id,{status:'confirmed'},{new:true}).then(response=>{
        let data = {
            fullname: response.fullname,
            date: response.date,
            numberofpeople: response.numberofpeople,
            hours: response.hours,
            phone: response.phone,
            address: response.address

        }
        
        let options = {
            emailType: 'ReservAdminConfirm',
            email: response.email,
            subject: 'EstefiMakeup Appointment Confirmation',
            data: data
        }
        sendEmail(options);
        res.send('<h1> Appointment confirmation sent</h1>')
    })
    .catch(error=>{ 
        res.status(400).send(error);
    })

}

//--- cambio status = rejected
const rejectEmail=(req,res,next)=>{
    let id = req.params.id;

    Appointment.findByIdAndUpdate(id,{status:'rejected'},{new:true}).then(response=>{
    let data = {
        fullname: response.fullname,
    }
    
    let options = {
        emailType: 'ReservAdminReject',
        email: response.email,
        subject: 'EstefiMakeup Appointment',
        data: data
    }
    sendEmail(options);
        res.send('<h1> Appointment reject sent</h1>')
    })
    .catch(error=>{
        res.status(400).send(error);
    })
    

}



module.exports = {busyHours,newAppointment,confirmEmail,rejectEmail} 