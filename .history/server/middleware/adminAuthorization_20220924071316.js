module.exports = (req, res, next) => {
    
    const {name} = req.body;
    if(name == "admin"){
        res.json("Admin only. Not ")
    }

    next();
}