

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

}