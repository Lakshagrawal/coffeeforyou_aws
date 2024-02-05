require('dotenv').config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const routes = require('./routes/main')
const hbs = require('hbs')
const path = require('path')

// order to be maintain
// it en code the data to incripted formate
const bodyParser = require("body-parser")
// const { Server } = require("http")
app.use(bodyParser.urlencoded({
    extended:true
}))

// we can use public resource in public 
// all the main route is in the file router 
app.use("/static",express.static(path.join(__dirname, '../public')))


// making the default hbs (if any one save the file without hbs then it recongnize is as hbs automatic)
// it is going to find the file in tht views folder 
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname, '/views'))

// it is help in use of navbar templet   "  {{>navbar}}  " <<-- this funtion
hbs.registerPartials(path.join(__dirname, "views/partials"))
// console.log(path.join(__dirname, "views/partials"));
app.use("",routes)



try{
    const dbURL = process.env.SERVER_DB_KEY || "mongodb://localhost:27017/bloging";  
    // console.log(dbURL);
    mongoose.set('strictQuery', true);
    mongoose.connect(dbURL).then(()=>{
        console.log("db is connected succsesfully");
    }).catch((err)=>{
        console.log(err);
    })
}catch(err){
    console.log(err);
}



// const server = http.createServer((req,res)=>{
//     if(res.url == "home"){
//         res.end("This is home page ")
//     }
// })
// server.listen(post,"127.0.0.1",()=>{
//     console.log("hello servers is stated");
// })


let port = process.env.APP_PORT || 5000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
