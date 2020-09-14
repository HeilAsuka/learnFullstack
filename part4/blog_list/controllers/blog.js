const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const Error = require("mongoose").Error;

blogsRouter.get("/", (request, response) => {
    Blog.find({}).then((blogs) => {
        response.json(blogs);
    });
});

blogsRouter.post("/", (request, response) => {
    const blog = new Blog(request.body);

    blog.save()
        .then((result) => {
            response.status(201).json(result);
        })
        .catch((error) => {
            if (error instanceof Error.ValidationError) {
                response.status(400).end();
            }
        });
});
module.exports = blogsRouter;
