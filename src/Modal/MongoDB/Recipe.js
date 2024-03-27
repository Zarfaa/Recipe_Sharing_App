import mongoose, { Schema } from "mongoose";

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 300,
        minlength: 3
    },
    category : {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 5
    },
    ingredients: {
        type: [String], 
        required: true
    },
    image: {
        type: String, 
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 10000,
        minlength: 5
    },
    steps: {
        type: String,
        required: true,
        maxlength: 10000,
        minlength: 5
    }
}, {
    timestamps: true
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

export default Recipe;
