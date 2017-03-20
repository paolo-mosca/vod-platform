// var _ = require('lodash');
var recipeRouter = require('express').Router();
var recipeModel = require('./recipeModel');
var logger = require('../../util/logger');
var authMiddleware = require('../../middleware/authMiddleware');


// var recipes = [];
// var id = 0;
//
// var updateId = function(req, res, next) {
//   if (!req.body.id) {
//     id++;
//     req.body.id = id + '';
//   }
//   next();
// };

// recipeRouter.param('id', authMiddleware.checkUser, authMiddleware.checkAdmin, function(req, res, next, id) {
//   var recipe = _.find(recipes, {id: id});
//
//   if (recipe) {
//     req.recipe = recipe;
//     next();
//   } else {
//     res.send();
//   }
// });


recipeRouter.get('/', function(req, res) {
  recipeModel.find({})
             .deepPopulate('author tags ingredients.ingredient equipment.equipment learningPath categories skillsLearnt')
             .exec(function(err, recipes) {
                if (err) {
                  return res.status(403).send(err);
                }
                // object of all the recipes
                res.status(200).send(recipes);
            });
});

recipeRouter.get('/:slug', function(req, res) {
  recipeModel.findOne({slug: req.params.slug}, function(err, recipe) {
    if (err) {
      return res.status(403).send(err);
    }

    res.status(200).send(recipe);
  });
});

recipeRouter.post('/', function(req, res) {
  var recipe = req.body;
  console.log(recipe)
  // recipe.userId = req.currentUser._id;
  // recipe.created = new Date("<YYYY-mm-dd>");
  // recipe.created = new Date.now();
  var newRecipe = recipeModel(recipe);

  // save the user
  newRecipe.save(function(err, recipe) {
    console.log(recipe, 'creayed', err)

    if (err) {
       res.status(403).send(err);
    } else {
      res.status(200).send(recipe);
    }
  });
});

recipeRouter.put('/:slug', function(req, res) {

  recipeModel.findOneAndUpdate({slug:req.params.slug}, req.body, function (err, recipe) {
    if (err) {
      return res.status(403).send(err);
    }

    res.status(200).send(recipe);
  });
});

recipeRouter.delete('/:id', authMiddleware.checkUser, authMiddleware.checkAdmin, function(req, res) {

  recipeModel.findById(req.params.id, function(err, recipe) {
    if (err) throw err;

    recipe.remove(function(err) {
      if (err) {
        return res.status(403).send(err);
      }

      res.status(200).send({});
    });
  });
});

module.exports = recipeRouter;
