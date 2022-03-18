require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator')

const app = express();


const userRoute = require('./router/user')

//middlewares....

const corsOptions = {
    origin: function (origin, callback) {
        return callback(null, true);
    },
    optionsSuccessStatus: 200,
    credentials: true,
}


app.use(cors(corsOptions));

app.use(morgan('dev'))
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressValidator())



//routes.....

app.use('/user', userRoute)







const PORT = process.env.PORT || 3000;

//database connection ....

mongoose.connect(process.env.URI).then(() => {
    console.log(`Db connected😄`);
    app.listen(PORT, () => {
        console.log(`server runs on port: ${PORT}😃`);
    })
}).catch(err => console.log(err))


