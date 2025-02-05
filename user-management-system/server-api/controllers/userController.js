// const { genSalt, hash } = require('bcryptjs');
const user = require ('../db/models/user');

async function userRegistration(req, res) {
    try {
        const {firstName, lastName, email, password} = req.body;

        if(!firstName || !lastName || !email || !password) {
            return res.status(400).send({
                status: 'failed',
                message: 'Field is missing'
            });
        }

        const newUser = await user.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });

        if(!newUser){
            return res.status(400).send({
                status: "failed",
                message: 'User Not Registered'
            });
        }

        return res.status(201).send({
            status: 'success',
            data: newUser
        })
    } catch (error) {
        console.log(`User Registration Error: ${error}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
}

async function userLogin(req,res) {
    try{
        const { email, password } = req.body;
        if (!email || !password){
            return res.status(400).json({
                message: "Incorrect email or password"
            })
        }
    } catch (error){
        console.log("User Login Error:", error);
        return res.status(500).json({
            status: "error",
            message: "Server error"
        })
    }
}

async function resetPassword(req,res) {
    try{
        return res.status(200).json({
            message: "Password reset successfully"
        })
    } catch (error) {
        console.log("Reset Password Error:", error);
        return res.status(500).json({
            status: "error",
            message: "Server error"
        })
    }
}

async function loggedOut(req, res) {
    try{
        return res.status(200).send({
            status: 'success',
            message: "User Logged Out"
        })
    } catch (error) {
        console.log("User Logged Out Error:", error);
        return res.status(500).send({
            status: "error",
            message: "Server error"
        })
    }
}
module.exports = {
    userRegistration,
    userLogin,
    resetPassword,
    loggedOut
};
