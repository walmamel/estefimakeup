const nodemailer = require('nodemailer');
const ReservReception = require('./TemplatesEmail/ReservReception.js');
const ReservAdminRequest = require('./TemplatesEmail/ReservAdminRequest');
const ReservAdminConfirm = require('./TemplatesEmail/ReservAdminConfirm');
const ReservAdminReject = require('./TemplatesEmail/ReservAdminReject');
const ContactUser = require('./TemplatesEmail/ContactUser');
const ContactAdmin = require('./TemplatesEmail/ContactAdmin');   

const sendEmail = async (options)=>{

    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user : process.env.MY_EMAIL,
            pass : process.env.MY_PASS,
        }
       
    });
    
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

    await transporter.sendMail(mailOptions)
}

module.exports = sendEmail;
