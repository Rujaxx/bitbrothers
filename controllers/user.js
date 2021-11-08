const User = require('../models/User')
const asyncHandler = require('../middlewares/async')
const ErrorResponse = require('../utils/errorResponse')


// @desc      Get Users
// @route     Get /api/v1/user
// @access    Public
exports.getUsers = asyncHandler(async(req,res,next) => {
    const users = await User.find()

    res.status(201).json({ 
        success: true,
        count: users.length,
        data: users
    })
})

// @desc      Get Users
// @route     Get /api/v1/user/:id
// @access    Public
exports.getUser = asyncHandler(async(req,res,next) => {
    const user = await User.findById(req.params.id)

    if(!user){
        return next(
            new ErrorResponse(`User with given id:${req.params.id} not found`,404) 
        )
    }

    res.status(201).json({ 
        success: true,
        data: user
    })
})

// @desc      Update User
// @route     PUT /api/v1/user/:id
// @access    Public
exports.update = asyncHandler(async(req,res,next) => {
    const { name, username} = req.body
    const user = await User.findByIdAndUpdate(req.params.id,{name,username},{
        new : true,
        validators : true
    })

    if(!user){
        return next(
            new ErrorResponse(`User with given id:${req.params.id} not found`,404) 
        )
    }

    res.status(201).json({ 
        success: true,
        data: user
    })
})

// @desc      Delete User
// @route     DELETE /api/v1/user/:id
// @access    Public
exports.deleteUser = asyncHandler(async(req,res,next) => {
    const user = await User.findByIdAndDelete(req.params.id)

    if(!user){
        return next(
            new ErrorResponse(`User with given id:${req.params.id} not found`,404) 
        )
    }

    res.status(201).json({ 
        success: true,
        data: user
    })
})