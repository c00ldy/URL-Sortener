const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
    {
        shortId : {
            type : String,
            require : true,
            unique: true,
        },
        redirectURl :{
            type:String,
            require:true,
        },
        visitorhistory : [ { timestemp : {type : Number} }],
    },

    {timestamps : true}
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
