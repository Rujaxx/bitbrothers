const User = require('../models/User')

// @desc      Get Users
// @route     Get /api/v1/user
// @access    Public
exports.getUsers = async(req,res,next) => {
    const users = await User.find()

    res.status(201).json({ 
        success: true,
        count: users.length,
        data: users
    })
}

// @desc      Get Users
// @route     Get /api/v1/user/:id
// @access    Public
exports.getUser = async(req,res,next) => {
    const user = await User.findById(req.params.id)

    if(!user){
        res.status(400).json({success : false , message : `User with given ${req.params.id} not found`})
    }

    res.status(201).json({ 
        success: true,
        data: user
    })
}

// @desc      Update User
// @route     PUT /api/v1/user/:id
// @access    Public
exports.update = async(req,res,next) => {
    const { name, username} = req.body
    const user = await User.findByIdAndUpdate(req.params.id,{name,username},{
        new : true,
        validators : true
    })

    if(!user){
        res.status(400).json({success : false , message : `User with given ${req.params.id} not found`})
    }

    res.status(201).json({ 
        success: true,
        data: user
    })
}

// @desc      Delete User
// @route     DELETE /api/v1/user/:id
// @access    Public
exports.deleteUser = async(req,res,next) => {
    const user = await User.findByIdAndDelete(req.params.id)

    if(!user){
        res.status(400).json({success : false , message : `User with given ${req.params.id} not found`})
    }

    res.status(201).json({ 
        success: true,
        data: user
    })
}