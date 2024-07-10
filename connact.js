const mongoose = require("mongoose")

async function connactToMongoDb (url){
return mongoose.connect(url);
}


module.exports = {
    connactToMongoDb,
}