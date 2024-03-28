const mongoose=require('mongoose');

async function mongoConnect(url){
    await mongoose.connect(url)
        .then(()=>console.log("connected to mongoDB"))
        .catch((err)=>console.log("Mongo Error: ",err));
}

module.exports={
    mongoConnect,
}