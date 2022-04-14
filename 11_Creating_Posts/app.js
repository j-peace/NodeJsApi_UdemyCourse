const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const dotenv = require("dotenv");
dotenv.config();

// db
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}).then(() => {console.log('DB connected')});

mongoose.connection.on('error', err => {console.log(`DB connection error: ${err.message}`);
});

// bring in routes
const postRoutes = require('./routes/post')
const myOwnMiddleware = (req, res, next) => {
    console.log ('middleware applied !!!');
    next();
};

// middleware
app.use(morgan("app.js"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {console.log(`A Node Js API is listening on port: ${port}`);
});
