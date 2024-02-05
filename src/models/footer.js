const mongoose = require("mongoose")

const Footer = mongoose.Schema(
    {
        par1:String,
        address:String,
        email:String,
        number:String,
        links:[
            {
                label_icon:String,
                url:String,
            },
        ],
    }
);

module.exports = mongoose.model("footer",Footer);