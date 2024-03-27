import Recipe from "../../../Modal/MongoDB/Recipe.js";

const createRecpie = async function (req, res){

  const { name, category , ingredients, image, description , steps } = req.body;

  try {
    const newRecpie = await Recipe.create({
      name,
      ingredients,
      image,
      description,
      category,
      steps
    });
    return res.json({
      message: "Recipe added successfully",
      data: newRecpie
    });
  } catch (error) {
    return res.status(500).json(error)
  }
};

export default createRecpie;
