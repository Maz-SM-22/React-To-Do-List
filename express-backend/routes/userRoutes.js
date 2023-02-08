const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const initializePassport = require('../config/passport');
const userController = require('../controllers/userController');
const checkAuthenticated = require('../middleware/authentication');

initializePassport(passport);

const router = express.Router();

router.post('/register', urlencodedParser, userController.registerUser);
router.post('/login', urlencodedParser, userController.loginUser);
router.get('/logout', userController.logoutUser);
router.get('/data', userController.getLoggedInUser);

module.exports = router;
