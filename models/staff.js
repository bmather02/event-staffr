const mongoose = require('mongoose');
const Schema = mongoose.Schema

const staffSchema = new Schema({
   firstName: { type: String, required: true,},
   lastName: { type: String, required: true,},
   skills: { type: Array, required: true,},
   partner: String,
   arrival: { type: Date, required: true,},
   departure: { type: Date, required: true,},
   isDancingWithStudents: { type: Boolean, required: true,},
   studentCategories: Array,
   studentAgeDivisions: Array,
   isCompeting: { type: Boolean, required: true,},
   categories: Array,
   ageDivisions: Array, 
   qualifiedToJudge: Array, 
   judging: Array,
   teaching: Array,
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;