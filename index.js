require('dotenv').config();
const express = require('express');

const app = express();

app.get("/", (req, resp)=>{
    resp.send("Ok")
})
app.get("/instagram", (req, resp)=>{
    resp.send("naveedshera")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example port running at ${process.env.PORT}`);
})