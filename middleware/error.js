// Middleware erreur
const error = (err, req, res, next) => {
    console.error(err.message);
    console.error(err);
    res.status(500).json({ error: err.message });
};


export default error;