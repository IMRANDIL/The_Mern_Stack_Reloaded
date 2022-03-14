require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const cors = require('cors')


const app = express();


const testroute = require('./router/test')

//middlewares....


app.use(cors())

app.use(morgan('dev'))
app.use(express.json());

app.use(express.urlencoded({ extended: true }))



//routes.....

app.use('/api', testroute)







const PORT = process.env.PORT || 3000;

//database connection ....

mongoose.connect(process.env.URI).then(() => {
    console.log(`Db connected😄`);
    app.listen(PORT, () => {
        console.log(`server runs on port: ${PORT}😃`);
    })
}).catch(err => console.log(err))


