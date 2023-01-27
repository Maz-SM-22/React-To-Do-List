const express = require('express');
const formController = require('../controllers/formController');

const router = express.Router();

router.get('/task/create', formController.renderTaskForm);
router.get('/task/edit/:id', formController.renderTaskForm);

module.exports = router; 
