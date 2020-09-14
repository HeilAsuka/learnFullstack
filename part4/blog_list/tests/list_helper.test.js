const listHelper = require("../utils/list_helper");
const blogs = require("./testHelper")

test("dummy returns one", () => {
    const emptyblogs = [];
    const result = listHelper.dummy(emptyblogs);
    expect(result).toBe(1);
});
describe("total likes", () => {
    const empty = [];
    const listWithOneBlog = [
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Edsger W. Dijkstra",
            url:
                "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 5,
            __v: 0,
        },
    ];

    test("of empty list is zero", () => {
        const result = listHelper.totalLikes(empty);
        expect(result).toBe(0);
    });
    test("when list has only one blog, equals the likes of that", () => {
        const result = listHelper.totalLikes(listWithOneBlog);
        expect(result).toBe(5);
    });
    test("of a bigger list is calculated right", () => {
        const result = listHelper.totalLikes(blogs);
        expect(result).toBe(36);
    });
});
describe("favorite blog", () => {
    const expected = {
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        likes: 12,
    };
    const result = listHelper.favoriteBlog(blogs);
    test("return the most like blog", () => {
        expect(result).toEqual(expected);
    });
});
describe("author of most blogs", () => {
    const expected = {
        author: "Robert C. Martin",
        blogs: 3,
    };
    const result = listHelper.mostBlogs(blogs);
    test("return the author of most blogs", () => {
        expect(result).toEqual(expected);
    });
});
describe("most likes blogs", () => {
    const expected = {
        author: "Edsger W. Dijkstra",
        likes: 17,
    };
    const result = listHelper.mostLike(blogs);
    test("return the most like blogs", () => {
        expect(result).toEqual(expected);
    });
});
