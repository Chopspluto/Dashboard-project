// to test if users are authorised

const 
module.exports = async (req, res, next) => {
    try {
        const jwtToken = req.header("token");

        if (!jwtToken) {
            return res.status(403).json("Not authorised");
        }

    } catch (error) {
        console.error(error.message);
        return res.status(403).json("Not Authorised")
    }
}