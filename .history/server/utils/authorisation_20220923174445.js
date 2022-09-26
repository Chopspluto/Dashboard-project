// to test if users are authorised
module.exports = async (req, res, next) => {
    try {
        const jwtToken = req.header("token")
    } catch (error) {
        console.error(error.message);
        return res.status(403).json("Not Authorised")
    }
}