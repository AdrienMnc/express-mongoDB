const express = require("express");
const app = express();

// import routes and controllers here
const postRouter = require("./routes/post");

// define routes here
app.use(express.json());
app.use("/post", postRouter);

// define controllers here

module.exports = app;
