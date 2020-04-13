const mongoose=require('mongoose');

const LOCAL_DB = 'mongodb://localhost:27017/white-board';

mongoose.connect(LOCAL_DB);


console.log("hello")