const catchAsync = require('../utils/catchAsync');







 // Get Country List
 exports.sendEmail = catchAsync(async (req, res, next) => {    
    const countryList = await Country.find({}).all();  
    res.status(200).json({
      status: 'success',
      data: {
        countryList: countryList
      }
    });  
  });