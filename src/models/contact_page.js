const mongoose = require("mongoose")

const Contact_page = mongoose.Schema(
    {
        map_link:String,
        Context:[
            {
                label:String,
                para:String,
            },
        ],
    }
);

module.exports = mongoose.model("contact_page",Contact_page);