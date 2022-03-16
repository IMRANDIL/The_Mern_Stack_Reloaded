

const jwt = require('jsonwebtoken')

exports.verifyToken = (req, res, next) => {

    let accessToken = req.cookies.jwt;


    //if there is no token in the cookies....request is unauthorized....

    if (!accessToken) {
        return res.status(403).json({ message: 'Unauthorized' })
    }


    let payload;


    try {
        //verify the token now....

        //throws an error if token has expired...

        payload = jwt.verify(accessToken, process.env.JWT_SECRET);


        req._id = payload._id;


        next()

    } catch (error) {

        //return request unauthorized error....

        return res.status(403).json({ error: 'Unauthorized' })


    }





}