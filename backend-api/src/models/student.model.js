const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name:{type: String, required: true, trim: true},
  birthday: {type: String, required: true, trim: true},
  address: {type: String, required: true, trim: true},
  phonenumber: {type: String, required: true, trim: true},
  grade: {type: Number, required: true, trim: true},
  whatsappnumber: {type: String, required: false, trim: true },
  parentname: {type: String, required: true, trim: true},
  parentoccupation: {type: String, required: true, trim: true}
});

const Student = mongoose.model('students',StudentSchema);

module.exports = Student;