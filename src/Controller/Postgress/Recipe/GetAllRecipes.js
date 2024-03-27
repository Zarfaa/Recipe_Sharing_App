import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const getAllRecipes = async function (req, res) {
    try {
        let { category, ingredients } = req.query;
        let filterOptions = {};

        if (category) {
            filterOptions = {
                ...filterOptions,
                category: {
                    equals: category,
                    mode: 'insensitive',
                },
            };
        }
        if (ingredients) {

            filterOptions = {
                ...filterOptions,
                ingredients: {
                    some: {
                        equals: ingredients,
                    },
                },
            };
        }

        const filteredRecipes = await prisma.recipe.findMany({
            where: filterOptions,
        });

        if (filteredRecipes.length === 0) {
            return res.status(404).json({
                message: "No recipes found with the specified ingredient",
            });
        }

        return res.json({
            message: "Recipes retrieved successfully",
            data: filteredRecipes
        });
    } catch (error) {
        return res.status(500).json(error);
    }
};


export default getAllRecipes