import jwt from 'jsonwebtoken';
import { db } from '../db/db.js';

const secretKey = process.env.SECRET_KEY || 'MY_SECRET_KEY';

export const login = async (req, res) => {
    const { username, password } = req.body;

    const user = db.find(user => user.username === username && user.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    } else {
        const token = jwt.sign({ username: user.username, role: user.role }, secretKey, { expiresIn: '1h' });

        res.json({ token, username: user.username, role: user.role, email: user.email });
    }
};