const { Router } = require('express');
const { userRegistration } = require('../controllers/userController');

const router = Router();

router.route('/user-registration').post(userRegistration);

module.exports = router;
