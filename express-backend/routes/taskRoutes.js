const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const taskController = require('../controllers/taskController');
const checkAuthenticated = require('../middleware/authentication');

const router = express.Router();

router.get('/:userId', checkAuthenticated, taskController.getTasks);
router.post('/', urlencodedParser, checkAuthenticated, taskController.createTask);
router.get('/:id', checkAuthenticated, taskController.getTaskById);
router.put('/:id', urlencodedParser, checkAuthenticated, taskController.editTask);
router.delete('/:id', checkAuthenticated, taskController.deleteTask);
router.get('/done/:id', checkAuthenticated, taskController.updateTaskStatus);

module.exports = router; 
