module.exports = (req, res, next) => {
    const { name, email, password } = req.body;

    function validateEmail(userEmail) {
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail));
    }

    if (req.path === "/register") {
        if (![name, email, password].every(Boolean)) {
            return res.json("register.Missing Credentials");
        }
        else if (!validateEmail(email)) {
            return res.status(401).json("You have entered an invalid email address!");
        }
    }

    if (req.path === "/login") {
        if (![email, password].every(Boolean)) {
            return res.json("Missing Credentials");
        }
        else if (!validateEmail(email)) {
            return res.status(401).json("You have entered an invalid email address!");
        }
    }
    next();
}