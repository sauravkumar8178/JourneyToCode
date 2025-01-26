const { signup } = require('../controllers/authController');
const router = require('express').Router();

router.route('/signup').post(signup);

module.exports = router;