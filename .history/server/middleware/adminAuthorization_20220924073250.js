module.exports = (req, res, next) => {
    
    const {name} = req.body;
    if(name !== "admin"){
        res.status(500).json(`"Admin only. Unauthorised user" ${name}`)
    }

    next();
}