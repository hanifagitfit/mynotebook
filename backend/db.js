const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/mynotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connect to mongo successfully");
    })
}

module.exports=connectToMongo