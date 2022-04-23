const mongoose = require('mongoose');
const mongoURl = "mongodb://localhost:27017/inote";

const connectToMongo = () => {
    mongoose.connect(mongoURl,()=>{
        console.log("Connected to mongo successfully !!");
    })
}

module.exports=connectToMongo;