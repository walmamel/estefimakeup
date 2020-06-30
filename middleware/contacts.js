const Contact = require('../models/Contact');
const {validationResult} = require('express-validator');
const sendEmail = require('./SendEmail2');

const newContact = (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.json({error:true,errors:errors.array()});
    }else{
        let {fname,email,phone,message} = req.body;
    
        let data = {
    
            fname: fname,
            email: email,
            phone: phone,
            message: message
        }
console.log(data);

        let newContacts = new Contact(data)
    
        newContacts.save()
        .then(response => {
            console.log(response);
            //Aqui
            let data = {
                fname: response.fname,
            }
            
            let options = {
                emailType: 'ContactUser',
                email: response.email,
                subject: 'EstefiMakeup Message Received',
                data: data
                }

            sendEmail(options);

            let data_admin = {
                fname: response.fname,
                email: response.email,
                phone: response.phone,
                message: response.message
            }

            let options_admin = {
                emailType: 'ContactAdmin',
                email: 'estefimakeupreplay@gmail.com', 
                subject: 'New Message Received',
                data: data_admin
            }
            sendEmail(options_admin);
            res.send({error:false, msg: 'Message was received'})
            })
            .catch(err => {
            console.log(err);
            res.status(400).send({msg: err})
        })
    }

}


module.exports = {newContact};