var router = require('express').Router();

// api router will mount other routers
// for all our resources
router.use('/recipes', require('./recipe/recipeRoutes'));
router.use('/users', require('./user/userRoutes'));
router.use(require('./recipe-info/recipeInfoRoutes'));



module.exports = router;
