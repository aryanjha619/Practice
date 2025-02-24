const {connect} = require('mongoose');

const connectDB = async(url)=>{
    try{
        await connect(url);
        console.log("Database Connected");

        
    }
    catch(err){
        console.log("database not connected",err)
    }
    }

module.exports = connectDB;