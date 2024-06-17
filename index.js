const express = require('express');
const {connect} = require('./config/connection');
require("dotenv").config();
const listRoute = require('./src/Lists/list.routes')


const app = express();
const PORT = process.env.PORT;

//To establish connection with database

connect();

// For URL-encoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/lists',listRoute);


app.listen(PORT, () => { 
    console.log(`server is running on port: ${PORT}`);
});
