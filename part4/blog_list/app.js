const logger = require("./utils/logger");
const config = require("./utils/config");
const Blog = require("./models/blog");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const blogsRouter = require("./controllers/blog");
const middleware = require("./utils/middleware")

mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogsRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);
module.exports = app;
