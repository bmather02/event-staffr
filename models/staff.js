const mongoose = require('mongoose');
const Schema = mongoose.Schema

const staffSchema = new Schema({
   firstName: { type: String, required: true,},
   lastName: { type: String, required: true,},
   skills: { type: Array, required: true,},
   partner: String,
   arrival: { type: Date, required: true,},
   departure: { type: Date, required: true,},
   dancingWithStudents: { type: Boolean, required: true,},
   studentCategories: Array,
   studentAgeDivisions: Array,
   competing: { type: Boolean, required: true,},
   Categories: Array,
   AgeDivisions: Array,  
   judging: Array,
   teaching: Array,
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;