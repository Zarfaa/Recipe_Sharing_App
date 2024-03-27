import Recipes from "../../../Modal/MongoDB/Recipe.js";

const getAllRecipes = async function (req, res) {
  try {
    let { category, ingredients } = req.query;

    const query = {};

    if (category) {
        query.category = { $regex: new RegExp(category, "i") };
    }

    if (ingredients) {
        ingredients = ingredients.split(",").map(ingredient => new RegExp(ingredient.trim(), "i"));
        query.ingredients = { $all: ingredients };
    }

    const filteredRecipes = await Recipes.find(query);

    return res.json({
        message: "Recipes retrieved successfully",
        data: filteredRecipes
    });
} catch (error) {
    return res.status(500).json(error);
}

};

export default getAllRecipes;
