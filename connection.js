const mongoose=require('mongoose');

async function mongoConnect(){
    await mongoose.connect("mongodb+srv://itzfelu:<Harami...>@cluster0.zl9pdxe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(()=>console.log("connected to mongoDB"))
        .catch((err)=>console.log("Mongo Error: ",err));
}

module.exports={
    mongoConnect,
}
