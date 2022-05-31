const express = require('express');
const router = express.Router();
const Staff = require('../models/staff');

//Index
router.get('/', (req, res) => {
    Staff.find({}, (err, foundStaff) => {
        res.render("staff/index.ejs", {
            staff: foundStaff
        });
    });
});

//New

//Delete

//Update

//Create
router.post("/", (req, res) => {
    Staff.create(req.body, (err, createdStaff) => {
        res.redirect("/staff");
    });
});

//Edit

//Show
router.get("/:id", (req, res) => {
    Staff.findById(req.params.id, (err, foundStaff) => {
        res.render("staff/show.ejs", {
            staff: foundStaff
        });
    });
});

module.exports = router