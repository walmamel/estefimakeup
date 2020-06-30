const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const path  = require('path')
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
const sendEmail = require('./middleware/sendEmail');

dotenv.config({path:'./config/config.env'});

connectDB();

// Middleware
app.use(cors());
app.use(express.json({extended: false}));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,"client","build")))


//Define Routes
app.use('/api/appointment', require('./routes/appointment'));
app.use('/contact', require('./routes/contact'));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"client","build","index.html"))
})

const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=> console.log(`Server Started on Port ${PORT}`.magenta.underline));
