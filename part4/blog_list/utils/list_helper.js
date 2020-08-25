const dummy = (blogs) => {
    return 1;
};
const totalLikes = (blogs) => {
    if (blogs.length === 0) return 0;
    const reducer = (total, currentBlog) => total + currentBlog.likes;
    return blogs.reduce(reducer,0)
};

module.exports = {
    dummy,
    totalLikes
};
