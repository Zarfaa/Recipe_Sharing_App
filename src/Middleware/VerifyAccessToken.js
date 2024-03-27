import jwt from "jsonwebtoken";

const VerifyAccessToken = async (req, res, next) => {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
        return res.status(401).json({ message: "Access Token is missing" });
    }

    const accessToken = authorizationHeader.split(' ')[1]; 

    try {
        const decodedClaims = jwt.verify(accessToken, process.env.ACCESS_SECRET);
        res.locals.user = decodedClaims;
        return next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid Access Token" });
    }
};

export default VerifyAccessToken;
