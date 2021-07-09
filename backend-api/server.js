const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const studentAPI = require('./src/api/student.api'); 

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8087;
const MONGODB_URL = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
},(error) =>{
  if(error){
    console.log('Database error : ', error.message);
  }
});

mongoose.connection.once('open',() =>{
  console.log('Database Synced');
});

app.listen(PORT, () => {
  console.log(`Server start running on PORT ${PORT}`);
});

app.route('/').get((req, res) =>{
  res.send("SAMMA SAMADHI DHAMMA SCHOOL - STUDENT MANAGEMENT SYSTEM ");
});

app.use('/student',studentAPI);
