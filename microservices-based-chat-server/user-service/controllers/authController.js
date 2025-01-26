const signup = (req, res) => {
    res.json({
        status: 'success',
        message: 'Successfully registered',
    });
}

module.exports = { signup };