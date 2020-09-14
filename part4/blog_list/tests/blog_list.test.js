const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const Blog = require("../models/blog");
const blogs = require("./testHelper");
const api = supertest(app);

beforeAll(async () => {
    await Blog.deleteMany({});
    blogs.forEach(async (blog) => {
        let blogObject = new Blog(blog);
        await blogObject.save();
    });
});

afterAll(() => {
    mongoose.connection.close();
});

describe("get blogs", () => {
    test(`blogs are returned as json`, async () => {
        await api
            .get("/api/blogs")
            .expect(200)
            .expect("Content-Type", /application\/json/);
    });
    test("should have correct number of blogs", async () => {
        const res = await api.get("/api/blogs");
        expect(res.body.length).toBe(6);
    });
    test("blog should have id porperty", async () => {
        const res = await api.get("/api/blogs");
        expect(res.body[0].id).toBeDefined();
    });
});
describe("post blog", () => {
    test("create a blog", async () => {
        const newBlog = {
            title: "new title",
            author: "new author",
            url: "https://somenewurl.com/",
            likes: 1,
        };
        await api
            .post("/api/blogs")
            .send(newBlog)
            .set("Accept", "application/json")
            .expect(201);
        const res = await api.get("/api/blogs");
        expect(res.body.length).toBe(blogs.length + 1);
        expect(res.body).toContainEqual(expect.objectContaining(newBlog));
    });
    test("the default like of blog is 0", async () => {
        const newBlog = {
            title: "new title",
            author: "new author",
            url: "https://somenewurl.com/",
        };
        await api
            .post("/api/blogs")
            .send(newBlog)
            .expect((res) => res.likes == 0);
    });
    test("no title and no url", async () => {
        await api.post("/api/blogs").send({ author: "123" }).expect(400);
    });
});
