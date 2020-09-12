const dummy = (blogs) => {
    return 1;
};
const totalLikes = (blogs) => {
    if (blogs.length === 0) return 0;
    const reducer = (total, currentBlog) => total + currentBlog.likes;
    return blogs.reduce(reducer, 0);
};
const favoriteBlog = (blogs) => {
    const sorted = blogs.sort((a, b) => b.likes - a.likes);
    return {
        title: sorted[0].title,
        author: sorted[0].author,
        likes: sorted[0].likes,
    };
};
const mostBlogs = (blogs) => {
    const listOfAuthor = {};
    let mostBlogsCount = 0;
    let authorOfMostPosts = null;
    blogs.forEach((blog) => {
        if (!listOfAuthor.hasOwnProperty(blog.author)) {
            listOfAuthor[blog.author] = 1;
        } else {
            listOfAuthor[blog.author]++;
            mostBlogsCount++;
        }
    });
    for (const [key, value] of Object.entries(listOfAuthor)) {
        if (value === mostBlogsCount) {
            authorOfMostPosts = key;
        }
    }
    return {
        author: authorOfMostPosts,
        blogs: mostBlogsCount,
    };
};
const mostLike = (blogs) => {
    const listOfAuthor = {};
    let mostLikesCount = 0;
    let authorOfMostLikes = null;
    blogs.forEach((blog) => {
        if (!listOfAuthor.hasOwnProperty(blog.author)) {
            listOfAuthor[blog.author] = blog.likes;
        } else {
            listOfAuthor[blog.author] += blog.likes;
        }
    });
    for (const [key, value] of Object.entries(listOfAuthor)) {
        if (value >= mostLikesCount) {
            authorOfMostLikes = key;
            mostLikesCount = value;
        }
    }
    return {
        author: authorOfMostLikes,
        likes: mostLikesCount,
    };
};
module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLike,
};
