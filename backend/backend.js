// var express=require("express")
// var app=express()
// var mongoose=require("mongoose")
// var schema=require("./schema")
// var bodyparser=require("body-parser")


// app.use(bodyparser.urlencoded({extended:true}))
// mongoose.connect("mongodb://127.0.0.1/mydata")

// app.get("/",function(req,res){
//     res.render("api is working")
// })
// app.post("/",function(req,res){
//     var myinfo=req.body
//     var newschema= new schema({
//         name:myinfo.name,
//         email:myinfo.email,
//         message:myinfo.message
//     })
//     newschema.save()
//     .then(function(response){
//         console.log(response)
//         res.render("layout")
//     })
    
// })