const mongoose=require('mongoose');

const dobSchema=mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    dob:{
        type: String,
        required: true,
    },
    created_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})

const DOB=mongoose.model("dob",dobSchema);

module.exports={
    DOB,
};