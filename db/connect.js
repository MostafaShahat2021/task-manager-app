const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false); // Global setting

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
