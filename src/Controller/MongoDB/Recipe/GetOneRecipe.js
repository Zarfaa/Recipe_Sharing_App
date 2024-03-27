import  Recipes  from "../../../Modal/MongoDB/Recipe.js";

const getRecipeByID = async (req, res) => {
  const { id } = req.params;
  try {
    const Recipe = await Recipes.findById(id);

    if (!Recipe) {
      return res.status(404).json({
        message: "Recipe not found"
      })
    }

    return res.json({
      message: "Recipe retreived successfully",
      data: Recipe
    });
  } catch (error) {
    return res.status(500).json(error);
  }
}

export default getRecipeByID