var express = require('express');

var bodyParser = require('body-parser');
var commonRouter = require('./routes/commonRouter');
const compression = require('compression');
const cors = require('cors');
const AppError = require('./utils/appError');
var app = express();
const cookieParser = require("cookie-parser");
const cron = require("node-cron");
//app.use(express.json({ lmit: '5000mb' }));
const path = require('path');

app.use(express.json({ extended: false, limit: '500mb' }))
app.use(express.urlencoded({ limit: '500mb', extended: false, parameterLimit: 500000 }))

app.use(express.static('public'));

app.options('*', cors());
app.set("view engine", "pug");
app.set("email", path.join(__dirname, "email"));


// cookie parser middleware
app.use(cookieParser());

// Use api routes
// api route for common API like Country , Role , Permission , RolePermission
app.use('/api/v1/common', commonRouter);

//execute on 1st day of each month
 cron.schedule('0 0 1 * *', () => {
  console.log('+ script to add default holidays1...');
//  leaveController.assignLeavesByJobs(); // Pass the company name as a parameter
});

//execute at every minute
cron.schedule('* * * * *', async () => {
  console.log('Running script to add default holidays2...');
 // await leaveController.assignLeavesByJobs(); // Pass the company name as a parameter
});

module.exports = app;


// const express = require('express');
// const dotenv = require('dotenv');
// const routes = require('./routes');

// require('dotenv').config();

// //const routes = require('./routes');

// const app = express();

// // Load config file (before app)
// dotenv.config({ path: './config.env' });


// app.use(express.static('public'));

// // This is important, Heroku won't work with hard coded port
// const port = process.env.PORT || 3000;

// app.use("/api/v1/", routes);

// app.get("/url", (req, res, next) => {
//     console.log(`api called}`);
//     res.json(["Tony","Lisa","Michael","Ginger","Food"]);
//    });


// console.log(`process.env.PORT: ${process.env.PORT}`);

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// });