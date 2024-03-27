import Recipes from "../../../Modal/MongoDB/Recipe.js";

const DeleteRecipe = async (req, res) => {
  const { id } = req.params;

  try {
    const DeleteRecipe = await Recipes.findOneAndDelete(id)
    if (!DeleteRecipe) {
      return res.status(404).json({
        message: "Recipe not found!"
      })
    }
    return res.json({
      message: "Recipe deleted successfully",
      data: DeleteRecipe
    })
  }
  catch (error) {
    return res.status(500).json(error);
  }
}
export default DeleteRecipe