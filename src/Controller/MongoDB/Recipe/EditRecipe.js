import Recipes from "../../../Modal/MongoDB/Recipe.js";

const UpdateOneRecipe = async function (req, res) {
  const { id } = req.params;

  const { name, ingredients, image, description } = req.body;

  const newRecipe = {
    name,
    ingredients,
    image,
    description
  }

  try {
    const UpdatedRecipe = await Recipes.findByIdAndUpdate(id, { $set: newRecipe }, { new: true })
    if (!UpdatedRecipe) {
      return res.status(404).json({
        message: "Recipe not found!"
      })
    }
    return res.json({
      message: "Recipe Updated successfully",
      data: UpdatedRecipe
    })
  }

  catch (error) {
    return res.status(500).json(error);
  }

}

export default UpdateOneRecipe;