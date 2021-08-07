const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const authController = require('../controllers/auth');
const auth = require('../middleware/auth');

router.post(
  '/signup',
  [
    body('name').trim().not().isEmpty(),
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom(async (email) => {
        const user = await User.find(email);
        if (user[0].length > 0) {
          return Promise.reject('Email address already exist!');
        }
      })
      .normalizeEmail(),
    body('password').trim().isLength({ min: 7 }),
    body('RoleID').not().isEmpty(),
  ],
  auth,authController.signup
);
router.post('/admin',authController.Adminlogin);
router.post('/agent',authController.login);
// debugger
router.get('/', authController.fetchAll);
router.get('/roleid/:RoleID',authController.fetchbyname);
router.put('/',authController.Update );
router.put('/password', authController.updatepassword);
// debugger;
router.get('/:id', authController.fetchbyId)

module.exports = router;
