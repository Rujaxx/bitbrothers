const express = require('express')

const { 
    getUsers,
    getUser,
    update,
    deleteUser
 } = require('../controllers/user')

const router = express.Router()

router.get('/', getUsers)

router.route('/:id')
.get(getUser)
.put(update)
.delete(deleteUser)

module.exports = router;