module.exports = (req, res, next) => {
    const { name, email, password } = req.body;

    function validateEmail(userEmail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
            return (true)
        }
    }

    if(req.path === "/register"){
        if(![name, email,password].every(Boolean)){
            return res.json("Missing Credentials");
        }
        else if(!validateEmail(email)){
            return res.json("You have entered an invalid email address!");
        }
    }

    if(req.path === "/login"){
        if(![email,password].every(Boolean)){
            return res.json("Missing Credentials");
        }
        else if(!validateEmail(email)){
            return res.json("You have entered an invalid email address!");
        }
    }
}