// const express = require('express')
// const router = express.Router()

// // Include server-side validation
// const validation = require('../express-validator')
// // Include isAuthenticated module
// const { isAuthenticated } = require('../config/auth')

// // Include Controller
// const postController = require('../controllers/todo')

// router.get('/', isAuthenticated, postController.getViewAllPost)

// // show one todo
// router.get('/view/:id', isAuthenticated, postController.getViewOnePost)

// // create todo page
// router.get('/new', isAuthenticated, postController.getNewPost)

// // create todo submit
// router.post('/new', isAuthenticated, validation.newPost, postController.postNewPost)

// // update todo page
// router.get('/edit/:id', isAuthenticated, postController.getEditPost)

// // update todo submit
// router.put('/edit/:id', validation.editPost, isAuthenticated, postController.putEditPost)

// // delete todo 
// router.delete('/delete/:id', isAuthenticated, postController.deletePost)

// module.exports = router