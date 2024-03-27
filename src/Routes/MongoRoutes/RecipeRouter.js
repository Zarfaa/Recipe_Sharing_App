import { Router } from 'express';
import CreateRecpieController from "../../Controller/MongoDB/Recipe/CreateRecipe.js"
import DeleteRecpieConroller from "../../Controller/MongoDB/Recipe/DeleteRecipe.js"
import GetAllRecpiesController from "../../Controller/MongoDB/Recipe/GetAllRecipes.js"
import GetOneRecpieController from "../../Controller/MongoDB/Recipe/GetOneRecipe.js"
import UpdateRecpieController from "../../Controller/MongoDB/Recipe/EditRecipe.js"

const RecpiesRouter = Router();

RecpiesRouter.get("/" , GetAllRecpiesController);
RecpiesRouter.delete("/:id" , DeleteRecpieConroller);
RecpiesRouter.put("/:id" , UpdateRecpieController);
RecpiesRouter.get("/:id" , GetOneRecpieController);
RecpiesRouter.post("/" , CreateRecpieController);


export default RecpiesRouter;
