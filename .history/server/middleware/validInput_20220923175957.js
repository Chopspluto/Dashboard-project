module.exports = (req, res, next) => {
    const { name, email, password } = req.body;

    function validateEmail(userEmail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
    }

    if(req.path === "/register"){
        if(![name, email,password].every(Boolean)){
            
        }
    }
}