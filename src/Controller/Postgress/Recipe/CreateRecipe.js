import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createRecipe = async function (req, res) {
  const { name, category, ingredients, image, description, steps , createdBy} = req.body;

  try {
    const newRecipe = await prisma.recipe.create({
      data: {
        name,
        category,
        ingredients,
        image,
        description,
        steps,
        createdBy: { connect: { id: createdBy } }
      }
    });

    return res.json({
      message: "Recipe added successfully",
      data: newRecipe
    });
  } catch (error) {
    console.error("Error creating recipe:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default createRecipe;
