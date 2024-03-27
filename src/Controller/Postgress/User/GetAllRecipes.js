import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllUserRecipes = async function (req, res) {
  const id = parseInt(req.params.id);

    try {
        const user = await prisma.user.findUnique({ where: { id }, include: { recipes: true } });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const userRecipes = user.recipes;

        return res.json({
            message: "All recipes retrieved successfully",
            data: userRecipes
        });
    } catch (error) {
        console.error("Error fetching user recipes:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export default getAllUserRecipes;
