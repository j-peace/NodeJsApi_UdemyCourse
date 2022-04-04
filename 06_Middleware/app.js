const express = require("express");
const app = express();
const morgan = require("morgan");

// bring in routes
const {getPosts} = require('./routes/post.js')
const myOwnMiddleware = (req, res, next) => {
    console.log ('middleware applied !!!');
    next();
};

// middleware
app.use(morgan("app.js"));
app.use(myOwnMiddleware);
    
app.get("/", getPosts);

const port = 8080;
app.listen(port, () => {console.log(`A Node Js API is listening on port: ${port}`);
});
