import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getRecipeByID = async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await prisma.recipe.findUnique({
      where: {
        id: parseInt(id) 
      }
    });

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found"
      })
    }

    return res.json({
      message: "Recipe retrieved successfully",
      data: recipe
    });
  } catch (error) {
    return res.status(500).json(error);
  }
}

export default getRecipeByID;
