const express = require('express');
const { append } = require('express/lib/response');
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
router.get("/new", (req, res) => {
    res.render("staff/new.ejs");
});

//Delete

//Update

//Create
router.post("/", (req, res) => {
    req.body.skills = []
    req.body.judging = []
    req.body.teaching = []
    req.body.qualifiedToJudge = []
    console.log(req.body)
    if (req.body.scoring){
        req.body.skills.push("Scoring")
        delete req.body.scoring
    }
    if (req.body.emcee){
        req.body.skills.push("Emcee")
        delete req.body.emcee
    }
    if (req.body.floor_Mom){
        req.body.skills.push("Floor Mom")
        delete req.body.floor_Mom
    }
    if (req.body.contest_Coordinator){
        req.body.skills.push("Contest Coordinator")
        delete req.body.contest_Coordinator
    }
    if (req.body.hospitality){
        req.body.skills.push("Hospitality")
        delete req.body.hospitality
    }
    if (req.body.scrutineering){
        req.body.skills.push("Scrutineering")
        delete req.body.scrutineering
    }
    if (req.body.registration_Desk){
        req.body.skills.push("Registration Desk")
        delete req.body.registration_Desk
    }
    if (req.body.isDancingWithStudents === "on"){
        req.body.isDancingWithStudents = true
    } else {
        req.body.isDancingWithStudents = false
    }
    if (req.body.isCompeting === "on"){
        req.body.isCompeting = true
    } else {
        req.body.isCompeting = false
    }
    if (req.body.couplesApprentice){
        req.body.qualifiedToJudge.push("Couples Apprentice")
        delete req.body.couplesApprentice
    }
    if (req.body.lineApprentice){
        req.body.qualifiedToJudge.push("Line Apprentice")
        delete req.body.lineApprentice
    }
    if (req.body.couplesFundamental){
        req.body.qualifiedToJudge.push("Couples Fundamental")
        delete req.body.couplesFundamental
    }
    if (req.body.lineFundamental){
        req.body.qualifiedToJudge.push("Line Fundamental")
        delete req.body.lineFundamental
    }
    if (req.body.couplesJourneyman){
        req.body.qualifiedToJudge.push("Couples Journeyman")
        delete req.body.couplesJourneyman
    }
    if (req.body.lineJourneyman){
        req.body.qualifiedToJudge.push("Line Journeyman")
        delete req.body.lineJourneyman
    }
    if (req.body.couplesMaster){
        req.body.qualifiedToJudge.push("Couples Master")
        delete req.body.couplesMaster
    }
    if (req.body.lineMaster){
        req.body.qualifiedToJudge.push("Line Master")
        delete req.body.lineMaster
    }
    
    console.log(req.body)
        // for (let i=0; i < req.body.length; i++){
        //     console.log(req.body[i])
        //     if (req.body[i] === "on"){
        //         req.body.skills = req.body[i]
        //         console.log("Found one!")
        //     }
        // }
    
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