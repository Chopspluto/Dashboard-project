module.exports = (req, res, next) => {
    const { userName, userEmail, password } = req.body;

    function validateEmail(userEmail) {
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail));
    }

    if (req.path === "/register") {
        if (![userName, userEmail, password].every(Boolean)) {
            return res.json("register.Missing Credentials");
        }
        else if (!validateEmail(userEmail)) {
            return res.status(401).json("You have entered an invalid email address!");
        }
    }

    if (req.path === "/login") {
        if (![userEmail, password].every(Boolean)) {
            return res.json("Missing Credentials");
        }
        else if (!validateEmail(password)) {
            return res.status(401).json("You have entered an invalid email address!");
        }
    }
    next();
}