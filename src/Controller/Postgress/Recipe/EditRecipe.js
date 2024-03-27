import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const UpdateOneRecipe = async (req, res) => {
  const { id } = req.params;

  const { name, ingredients, image, description } = req.body;

  try {
    const updatedRecipe = await prisma.recipe.update({
      where: { id: parseInt(id) },
      data: { name, ingredients, image, description }
    });

    if (!updatedRecipe) {
      return res.status(404).json({
        message: "Recipe not found!"
      });
    }

    return res.json({
      message: "Recipe updated successfully",
      data: updatedRecipe
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json(error);
  }
};

export default UpdateOneRecipe;
