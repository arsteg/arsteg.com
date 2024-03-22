const sgMail = require('@sendgrid/mail')

const sendEmail = async options => { 

  sgMail.setApiKey(process.env.SENDGRID_API_KEY); 
  // 1) Define the email options  
  const message = {
    from: options.fromEmail,
    to: options.toEmail,
    subject: options.subject,
    html: options.messageBody
}
  // 2) Actually send the email
 try {
sgMail.send(message)
.then(response => console.log('Email sent successfully...'))
.catch((error) => console.log(error.message));
} catch (error) {
  console.error('Error sending email:', error.message);
};
}
module.exports = sendEmail;
