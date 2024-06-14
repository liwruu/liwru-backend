export const isAuthenticated = (req, res, next) => {
    if (req.session.userId) {
        return next();
    }
    return res.status(401).json({ message: 'Unauthorized' });
};

export const isAdmin = (req, res, next) => {
    if (req.session.role === 'admin') {
        return next();
    }
    return res.status(403).json({ message: 'Admins only' });
};

export const isUser = (req, res, next) => {
    if (req.session.role === 'user') {
        return next();
    }
    return res.status(403).json({ message: 'Users only' });
};
