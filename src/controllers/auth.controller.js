import bcrypt from 'bcrypt';
import { User } from '../models/user.js';

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Almacenar el ID y rol del usuario en la sesión
        req.session.userId = user.id;
        req.session.username = user.username;
        req.session.role = user.role;

        // Redirigir según el rol del usuario
        if (user.role === 'admin') {
            return res.status(200).json({ message: 'Login successful', redirectUrl: '/admin' });
        } else {
            return res.status(200).json({ message: 'Login successful', redirectUrl: '/user' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const logoutUser = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Failed to logout' });
        }
        res.clearCookie('connect.sid');
        return res.status(200).json({ message: 'Logout successful' });
    });
};
