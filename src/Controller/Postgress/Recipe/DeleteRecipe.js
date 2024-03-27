import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const deleteRecipe = async (req, res) => {
  const { id } = req.params; 
  try {
    const deletedRecipe = await prisma.recipe.delete({ where: { id: parseInt(id) } }); 
    if (!deletedRecipe) {
      return res.status(404).json({
        message: "Recipe not found!"
      });
    }
    return res.json({
      message: "Recipe deleted successfully",
      data: deletedRecipe
    });
  } catch (error) {
    return res.status(500).json({ error: error.message }); 
  }
};
export default deleteRecipe; 
