const mongoose = require("mongoose")

const post_schema = mongoose.Schema({

    title:{
        type: String,
        required:true

    },
    content:{
        type: String,
        required:true
    }
})

exports = mongoose.model("Post", post_schema)
