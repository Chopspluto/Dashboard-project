module.exports = (req, res, next) => {
    const {name, email, password} = req.body;

    function validateEmail(userEmail){
        return /^\w+([\.])
    }
}