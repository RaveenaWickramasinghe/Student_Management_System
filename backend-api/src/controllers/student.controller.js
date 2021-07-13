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
};

//Update student
const updateStudent = async(req, res, next) => {
  if (req.body && req.body._id) {
    let student = await Student.findById(req.body._id);
    if (!student) {
      response.handleError(res, 'Student  not found');
      return;
    }
    let studentUpdateData = {
      name: req.body.name,
      birthday: req.body.birthday,
      address: req.body.address,
      phonenumber: req.body.phonenumber,
      grade: req.body.grade,
      whatsappnumber: req.body.whatsappnumber,
      parentname: req.body.parentname,
      parentoccupation: req.body.parentoccupation
    };
    
    await Student.findByIdAndUpdate(req.body._id, studentUpdateData)
    .then(data => {
      response.sendRespond(res, data);
      next();
    })
    .catch(error => {
      response.handleError(res, error.message);
      next();
    });
  }
};



module.exports = {
  createStudent,
  getAllStudents,
  updateStudent
};
