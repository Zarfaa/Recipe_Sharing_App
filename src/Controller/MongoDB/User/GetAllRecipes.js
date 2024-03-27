import Recipes from "../../../Modal/MongoDB/Recipe.js";

const getAllUserRecipes = async function (req, res) {
    const {id} = req.params.id

  try {
    const Recipe = await Recipes.find({id}, "name image")
    return res.json({
      message: "All Recipes retreived succesfully",
      data: Recipe
    })
  }

  catch (error) {
    return res.status(500).json(error)
  }

};

export default getAllUserRecipes;
