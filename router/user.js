const router = require('express').Router();


const { usercontroller } = require('../controllers/user');




//import controllers.....

//import middlewares....


router.post('/register', usercontroller)








module.exports = router;