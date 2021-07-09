const Student = require('../models/student.model');

//Insert a student
const createStudent =  async(req,res) => {
  if(req.body){
    const student = new Student(req.body);
    student.save().then(data =>{
      res.status(200).send({ data:data});
    })
    .catch(error =>{
      res.status(500).send({error: error.message});
    });
  }
}

//get all student details
const getAllStudents = async(req,res) => {
  await Student.find({}).populate('students', 'name birthday address phonenumber grade whatsappnumber parentname parentoccupation')
  .then(data => {
    res.status(200).send({ data: data });
  })
  .catch(error => {
    res.status(500).send({ error: error.message });
  })
}

module.exports = {
  createStudent,
  getAllStudents
};
