
const User = require('../models/user')



exports.userRegisterValidator = (req, res, next) => {

    //check userName is not null....

    req.check('userName', 'userName is required!').notEmpty();

    //check email is not null and valid....

    req.check('email', 'E-mail is required!').notEmpty();
    req.check('email', 'Invalid E-mail!').isEmail();




    //check password......validate the password now...

    req.check('password', 'Password is required!').notEmpty();

    req.check('password').isLength({ min: 6 }).withMessage('Password must contain at least 6 characters!');

    req.check('password', 'Password must contain at least one uppercase, one lowercase, one number and one special character!').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/, "i");



    //check for errors.....


    const errors = req.validationErrors();

    //if error, show the first one as it happens...

    if (errors) {
        const firstError = errors.map((error) => error.msg)[0];

        return res.status(400).json({
            error: firstError
        })
    }


    //proceed to next middleware...

    next()

}






//Another middleware......






exports.userById = (req, res, next) => {

    try {

        User.findById(req._id).exec((err, user) => {


            if (err || !user) {
                return res.status(404).json({
                    error: 'User not found!'
                })
            }

            //and user object in req with all user info...

            req.user = user;

            next()

        })

    } catch (error) {
        console.log(error);
    }



}