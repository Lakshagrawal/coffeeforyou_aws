const mongoose = require("mongoose")

const Journey = mongoose.Schema(
    {
        par1:String,
        par2:String,
    },
);

module.exports = mongoose.model("journey",Journey);