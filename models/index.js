const mongoose = require('mongoose');


const connectionString  =  process.env.MONGO_URI ;


const configOptions ={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
mongoose.connect(connectionString,configOptions)
    .then(()=> console.log('MongoDb Sucessfully connected...'))
    .catch((err) => console.log(`mongoDB connection error: ${err}`))


module.exports ={
    
    Item: require("./item"),
    User: require('./user')
}