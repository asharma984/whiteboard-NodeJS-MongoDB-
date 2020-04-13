// const mongoose=require('mongoose');
//
// const LOCAL_DB = 'mongodb://localhost:27017/white-board';
//
// mongoose.connect(LOCAL_DB);

module.exports = function () {
    const mongoose = require('mongoose');
    const LOCAL_DB = 'mongodb://localhost/white-board';
    mongoose.connect(LOCAL_DB, {useNewUrlParser: true, useUnifiedTopology: true});
};
