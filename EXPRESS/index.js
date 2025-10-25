
const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    return res.send("Hello from home page..");
})

app.get("/about", (req, res)=>{
    
    return res.send(`hello ${req.query.myname} from about page..`);
})

app.listen(8000, ()=>console.log("Server start.."));

