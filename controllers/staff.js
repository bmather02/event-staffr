const express = require('express');
const router = express.Router();
const Staff = require('../models/staff');

//Index
router.get('/', (req, res) => {
    Staff.find({}, (err, foundStaff) => {
        res.render("staff/index.ejs", {
            staff: foundStaff
        })
    })
})

//New

//Delete

//Update

//Create

//Edit

//Show

module.exports = router