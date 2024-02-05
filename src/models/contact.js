const mongoose = require("mongoose")

const Contact = mongoose.Schema(
    {
        first_name:String,
        last_name:String,
        number:String,
        address:String,
        query:String,
    }
)

module.exports = mongoose.model("contact",Contact);