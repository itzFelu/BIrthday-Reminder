const { DOB } = require('../models/dob');
const { clearUser } = require('../services/auth');

async function handleHome(req, res) {
    const createdBy=req.user?._id;
    if(createdBy){
        const result= await DOB.find({created_by: createdBy});
        // console.log(result);
        return res.status(200).render("home", {
            arr: result,
            user: req.user
        });
    }
    return res.status(200).render("home");
}
async function handleCreateEntry(req, res) {
    const created_by = req.user._id;
    // console.log(created_by);
    const { name, dob } = req.body;
    await DOB.create({
        name,
        dob,
        created_by
    });
    return res.status(201).redirect('/');
}
function handleLogout(req, res) {
    clearUser();
    res.clearCookie('uid');
    return res.status(200).redirect('/');
}
module.exports = {
    handleCreateEntry,
    handleHome,
    handleLogout
}