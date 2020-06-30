// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
const ReservReception = require('./TemplatesEmail/ReservReception.js');
const ReservAdminRequest = require('./TemplatesEmail/ReservAdminRequest');
const ReservAdminConfirm = require('./TemplatesEmail/ReservAdminConfirm');
const ReservAdminReject = require('./TemplatesEmail/ReservAdminReject');
const ContactUser = require('./TemplatesEmail/ContactUser');
const ContactAdmin = require('./TemplatesEmail/ContactAdmin');   

const sendEmail2 = async (options)=>{

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    let htmlBody = '';
    switch (options.emailType){
        case 'ReservReception' :
            htmlBody = ReservReception(options.data)
        break;
        
        case 'ReservAdminRequest':
            htmlBody = ReservAdminRequest(options.data)     
        break;
        
        case 'ReservAdminConfirm':
            htmlBody = ReservAdminConfirm(options.data)
        break;

        case 'ReservAdminReject':
            htmlBody = ReservAdminReject(options.data)   
        break;

        case 'ContactUser':
            htmlBody = ContactUser(options.data)
        break;

        case 'ContactAdmin':
            htmlBody = ContactAdmin(options.data)
        break;

            
    }

    console.log(options)

    let mailOptions = {
        from: `"Estefi Makeup" <estefimakeupreplay@gmail.com>`,
        to: options.email,
        subject: options.subject,
        html: htmlBody
    }


    sgMail.send(mailOptions)
    .then(()=>{
        console.log('se envio email a', options.email)
    }).catch(err=>{
        console.log(err.response.body)
    })
}

module.exports = sendEmail2;
