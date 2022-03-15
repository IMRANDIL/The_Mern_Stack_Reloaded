const User = require('../models/user')






//register user....



exports.registerUser = async (req, res, next) => {

    //check if user already exists...
    try {
        const isExistUser = await User.findOne({
            userName: req.body.userName
        });

        const isEmailExist = await User.findOne({
            email: req.body.email
        });



        if (isExistUser) {
            return res.status(403).json({ error: 'User Already Exists!' })
        }


        if (isEmailExist) {
            return res.status(403).json({ error: 'Email Already Exists!' })
        }


        //if new user...create the user now...

        const user = new User(req.body);

        await user.save();

        res.status(201).json({ message: 'SignUp successful, Please Login now' })



    } catch (error) {
        console.log(error);
    }





}