const express = require('express');
const app = express();
require('dotenv').config()
const methodOverride = require('method-override');
const staffController = require('./controllers/staff');
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongodb not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


//middleware
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static("public"))

//routers
app.use('/staff', staffController)

app.get("/", (req,res) => {
    res.render("index.ejs")
})

//listeners
app.listen(process.env.PORT, () => {
    console.log("Listening on port", process.env.PORT)
})