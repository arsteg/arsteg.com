const catchAsync = require('../utils/catchAsync');
const sgMail = require('@sendgrid/mail')


 // Get Country List
 exports.sendEmail = catchAsync(async (req, res, next) => {  
  sgMail.setApiKey(process.env.SENDGRID_API_KEY); 
  //sgMail.setApiKey('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'); 
  
  console.log(`process.env.SENDGRID_API_KEY: ${process.env.SENDGRID_API_KEY}`);

  try {
    const msg = {
      to: req.body.emailTo,
      from: req.body.emailFrom,
      subject: req.body.subject,
      text: req.body.emailBody + "\n\n" + req.body.realSender, 
      html: req.body.emailBody + "<br><br>" + req.body.realSender,
    };
    await sgMail.send(msg);
    console.log('Email sent successfully');
    res.status(200).json({
      status: 'success',
      data: "Email sent successfully"
    });
  } catch (error) {
    console.error('Error sending email:', error.toString());
    throw error;
  }
});

// Call the sendEmail function with the email options

  exports.test = catchAsync(async (req, res, next) => {        
    res.status(200).json({
      status: 'success',
      data: 'Worked'
    });  
  });



  