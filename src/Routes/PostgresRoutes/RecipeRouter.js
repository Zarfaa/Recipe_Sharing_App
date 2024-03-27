import { Router } from 'express';
import CreateRecpieController from "../../Controller/Postgress/Recipe/CreateRecipe.js"
import DeleteRecpieConroller from "../../Controller/Postgress/Recipe/DeleteRecipe.js"
import GetAllRecpiesController from "../../Controller/Postgress/Recipe/GetAllRecipes.js"
import GetOneRecpieController from "../../Controller/Postgress/Recipe/GetOneRecipe.js"
import UpdateRecpieController from "../../Controller/Postgress/Recipe/EditRecipe.js"

const RecpiesRouter = Router();

RecpiesRouter.get("/" , GetAllRecpiesController);
RecpiesRouter.delete("/:id" , DeleteRecpieConroller);
RecpiesRouter.put("/:id" , UpdateRecpieController);
RecpiesRouter.get("/:id" , GetOneRecpieController);
RecpiesRouter.post("/" , CreateRecpieController);


export default RecpiesRouter;
