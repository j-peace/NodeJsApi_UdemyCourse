const {sum} = require("./helpers")
const http = require('http')

const server = http.createServer((req, res) => {
    res.end("hello word from node js updated2");
});

server.listen(8100);

const total = sum(10, 200)
console.log("TOTAL: ", total);