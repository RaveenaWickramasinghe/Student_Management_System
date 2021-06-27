const express = require('express');
const router = express.Router();
const controller = require('../controllers/student.controller');

module.exports = function() {
  router.post('/create', controller.createStudent);
  return router;
}