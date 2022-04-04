// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.end("hey whas up from express")
// })

// app.listen(8100);

const fs = require("fs")
const fileName = "target.txt"

const data = fs.readFileSync(fileName);

console.log(data.toString());

// fs.readFileSync(fileName, (err, data) => {
//     if(err) {
//     console.log(err);
//     }
//     console.log(data.toString());
//     });

console.log("Node Js Program in async programming ... !");