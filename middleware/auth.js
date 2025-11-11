import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
    const token = req.session.token;
    if (!token) return res.status(403).json({ message: "No token found" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};

export const restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role))
            return res.status(403).json({ error: "Access forbidden" });
        next();
    };
};
