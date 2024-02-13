const Auth = require('../model/Authmodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ error: "Please fill in all the fields" });
        if (!validator.isEmail(email)) return res.status(400).json({ error: "Please enter a valid email address" });
        if (await Auth.findOne({ email })) return res.status(400).json({ error: "Email already exists" });
        const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));
        const newUser = await Auth.create({ email, password: hashedPassword });
        const token = jwt.sign({ _id: newUser._id }, 'your_secret_key_here', { expiresIn: '3d' });
        res.status(200).json({ email, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ error: "Please fill in all the fields" });
        const user = await Auth.findOne({ email });
        if (!user) return res.status(400).json({ error: "Email not found" });
        if (!await bcrypt.compare(password, user.password)) return res.status(400).json({ error: "Invalid password" });
        const token = jwt.sign({ _id: user._id }, 'your_secret_key_here', { expiresIn: '3d' });
        res.status(200).json({ email, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { login, signup };
