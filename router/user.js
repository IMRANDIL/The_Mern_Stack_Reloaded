const router = require('express').Router();


const { registerUser } = require('../controllers/user');




//import controllers.....

//import middlewares....


router.post('/register', registerUser)








module.exports = router;