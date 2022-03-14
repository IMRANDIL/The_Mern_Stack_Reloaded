const router = require('express').Router();


const { testcontroller } = require('../controllers/test');




//import controllers.....

//import middlewares....


router.get('/test', testcontroller)








module.exports = router;