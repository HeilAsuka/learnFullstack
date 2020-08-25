const mongoose = require("mongoose");

const connect = () => {
    mongoose
        .connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Connected to MongoDB at ", process.env.MONGO_URL);
        })
        .catch((err) => console.log(`Error message: ${err.message}`));
};
module.exports.connect = connect;
