const User = require('../models/user')

const jwt = require('jsonwebtoken')




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





//login now....controller

exports.loginUser = async (req, res) => {
    try {

        //find the user based on the email....

        const { email, password } = req.body;

        await User.findOne({ email }).exec((err, user) => {
            //check if err or no user...


            if (err || !user) {
                return res.status(401).json({ error: 'Invalid Credentials' })
            }



            //if user is found.....use the authenticate method....

            if (!user.authenticate(password)) {
                return res.status(401).json({ error: 'Invalid E-mail or Password' })
            }


            //generate a jwt token now.....with userId and jwt secret

            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });


            //persist the token as 'jwt' in cookie with an expiry date....

            res.cookie('jwt', token, { expire: new Date() + 9999, httpOnly: true });

            //return the response with the user.....


            const { userName } = user;

            return res.json({
                message: 'Login Successful',
                userName
            })


        })








    } catch (error) {
        console.log(error);
    }
}



//logout now.....controller.....




exports.userLogout = (req, res) => {

    //clear the cookie now....

    res.clearCookie('jwt');

    return res.json({
        message: 'Logout Successful'
    })

}



//get logged in user...controller....


exports.getLoggedInUser = (req, res) => {
    const { userName } = req.user;

    return res.status(200).json({
        message: 'User is still logged in.',
        userName
    })
}