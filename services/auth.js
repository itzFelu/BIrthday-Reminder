const sessionIdtoUserMap= new Map();

function setUser(id,user){
    sessionIdtoUserMap.set(id,user);
}
function getUser(id){
    return sessionIdtoUserMap.get(id);
}
function clearUser() {
    sessionIdtoUserMap.clear();
}
module.exports={
    setUser,
    getUser,
    clearUser,
    
}
