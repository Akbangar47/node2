//Creating a server
const express =require("express");//it will load the express package in our app
//creating app object
const app = express();
//route creation
//home route
app.get("/",(req,res)=>{
    res.send("Hello")
})
app.get("/api/main",(req,res)=>{
    res.write("<h1>Express</h1>")
    res.write("<p>Express is a light-weigth web application framework to help organize your web application into an mvc architecture on the server side."
    )
    res.end();
})
app.listen(2001);