const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const MONGODB_URL = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
},(error) =>{
  if(error){
    console.log("Database error : ", error.message);
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

