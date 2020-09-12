require("dotenv").config();

const PORT = process.env.PORT || 3003;
const MONGODB_URI =
    process.env.NODE_ENV === "test"
        ? process.env.MONGO_URI
        : process.env.TEST_MONGO_URI;

module.exports = {
    MONGODB_URI,
    PORT,
};
