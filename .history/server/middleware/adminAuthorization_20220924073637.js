module.exports = (req, res, next) => {
    
    const {email} = req.body;
    if(email !== "admin"){
        res.status(500).json("Admin only. Unauthorised user")
    }
    res.status(200).json("AUTHORIZED")

    next();
}