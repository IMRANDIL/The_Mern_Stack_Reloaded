const router = require('express').Router();


const { registerUser, loginUser, userLogout, getLoggedInUser } = require('../controllers/user');

const { userRegisterValidator, userById } = require('../middlewares/user');


const { verifyToken } = require('../middlewares/auth')


//import controllers.....

//import middlewares....


router.post('/register', userRegisterValidator, registerUser)


router.post('/login', loginUser);


router.get('/logout', userLogout)


router.get('/', verifyToken, userById, getLoggedInUser)


module.exports = router;