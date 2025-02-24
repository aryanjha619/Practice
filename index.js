const express = require('express');

const router = require('./src/Controller/user');
const connectDB = require('./src/Database/db');
const app = express();

require('dotenv').config({path:'./src/Config/.env'});
const port = process.env.PORT || 3000;
const url = process.env.db

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api',router);


app.listen(port,async()=>{
    try{
        await connectDB (url);
        console.log(`server is running on ${port}`);
    }
    catch(err){
        console.log("Not connected");
    }

})
