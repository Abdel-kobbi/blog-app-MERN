import jwt from "jsonwebtoken";
import User from "../models/user.js";

// Inscription
export const register = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ message: "User registered", user });
    } catch (err) {
        next(err);
    }
};

// Connexion
export const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) return res.status(401).json({ message: "User not found" });

        const match = user.comparePassword(`${password}`);
        if (!match) return res.status(401).json({ message: "Invalid password" });

        // Générer un token JWT
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

        // Sauvegarder le token dans la session
        req.session.token = token;

        res.json({ message: "Login successful" });
    } catch (err) {
        next(err);
    }
};
