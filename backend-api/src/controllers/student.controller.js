const Student = require('../models/student.model');

const createStudent =  async(req,res) =>{
  if(req.body){
    const student = new Student(req.body);
    student.save().then(data =>{
      res.status(200).send({ data: data});
    })
    .catch(error =>{
      res.status(500).send({error: error.message});
    });
  }
}

module.exports = {
  createStudent
};