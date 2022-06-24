const express = require('express')
const app = express()

// enable CORS using npm package
var cors = require('cors');
app.use(cors());

// read local JSON file in javascript
const jsonFile = require("./data.json");
console.log(jsonFile);


app.get("/api", (req,res) =>{
    res.json(jsonFile)
})

app.listen(5000, () =>(console.log("Server started on port 5000")))