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
module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
};
