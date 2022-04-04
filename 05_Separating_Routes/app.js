const express = require("express");
const app = express();

// bring in routes
const {getPosts} = require('./routes/post.js')

app.get("/", getPosts);

const port = 8080;
app.listen(port, () => {console.log(`A Node Js API is listening on port: ${port}`);
});