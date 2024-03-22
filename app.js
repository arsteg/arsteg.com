
const express = require('express');
const dotenv = require('dotenv');
//var commonRouter = require('./routes/commonRouter');

require('dotenv').config();

//const routes = require('./routes');

const app = express();

// Load config file (before app)
dotenv.config({ path: './config.env' });


app.use(express.static('public'));

// This is important, Heroku won't work with hard coded port
const port = process.env.PORT || 3000;

//app.use("/api/v1/", routes);

console.log(`process.env.PORT: ${process.env.PORT}`);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});