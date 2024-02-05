const mongoose = require("mongoose")

const Product = mongoose.Schema(
   {
        active:[
            {
                imageUrl1:String,
                title1:String,
                para1:String,
                imageUrl2:String,
                title2:String,
                para2:String,
                imageUrl3:String,
                title3:String,
                para3:String,
            },
            
        ],
        non_active:[
            {
                imageUrl:String,
                title:String,
                para:String,
            },
        ]
    },
)

module.exports = mongoose.model("product",Product);

