const router = require('express').Router();


const { registerUser } = require('../controllers/user');

const { userRegisterValidator } = require('../middlewares/user')


//import controllers.....

//import middlewares....


router.post('/register', userRegisterValidator, registerUser)








module.exports = router;