const User = require('../models/userModel'); 
const { genSalt, hash } = require('bcryptjs');

async function userRegistration(req, res) {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) { 
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const salt = await genSalt(10);
        const hashPassword = await hash(password, salt); 

        const createUser = await User.create({ 
            name,
            email,
            password: hashPassword
        });

        const checkUserId = await User.findById(createUser._id); 
        if (!checkUserId) {
            return res.status(500).json({
                message: "Internal server error"
            });
        }

        res.status(201).json({
            message: "User created successfully" 
        });

    } catch (error) {
        console.log(`User Registration Error: ${error}`);
        res.status(500).json({
            message: "Server error"
        });
    }
}

module.exports = {
    userRegistration
};
