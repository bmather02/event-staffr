const mongoose = require('mongoose');
const Schema = mongoose.Schema

const staffSchema = new Schema({
   firstName: { type: String, required: true,},
   lastName: { type: String, required: true,},
   skills: { type: Array, required: true,},
   partner: String,
   arrival: { type: String, required: true,},
   departure: { type: String, required: true,},
   isDancingWithStudents: { type: String, required: true,},
   studentCategories: Array,
   isCompeting: { type: String, required: true,},
   categories: Array, 
   qualifiedToJudge: Array, 
   judging: Array,
   teaching: Array,
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;