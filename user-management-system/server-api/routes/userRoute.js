const { Router } = require('express');
const { userRegistration, userLogin, resetPassword, loggedOut } = require('../controllers/userController');

const router = Router();

// router.route('/registration').post(userRegistration);
router.post('/signup', userRegistration);
router.route('/login').post(userLogin);
router.route('/reset-password').post(resetPassword);
router.route('/loggedOut').post(loggedOut);

module.exports = router;
