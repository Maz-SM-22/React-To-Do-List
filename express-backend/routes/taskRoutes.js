const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const taskController = require('../controllers/taskController');
const checkAuthenticated = require('../middleware/authentication');

const router = express.Router();

router.get('/:userId', taskController.getTasks);
router.post('/', urlencodedParser, taskController.createTask);
router.get('/:id', taskController.getTaskById);
router.put('/:id', urlencodedParser, taskController.editTask);
router.delete('/:id', taskController.deleteTask);
router.get('/done/:id', taskController.updateTaskStatus);

module.exports = router; 
