const User = require('../models/User')

// @desc      Register
// @route     Post /api/v1/auth/register
// @access    Public
exports.register = async(req,res,next) => {
    const { name, username, password} = req.body

    //create user
    const user = await User.create({ name, username, password})

    res.status(200).json({ success : true, message : 'User registered successfully'})
}