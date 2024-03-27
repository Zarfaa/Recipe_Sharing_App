import { Router } from "express";
import EditProfileController from "../../Controller/Postgress/User/EditProfil.js";
import ViewProfileController from "../../Controller/Postgress/User/ViewProfile.js";
import getAllUserRecipes from "../../Controller/Postgress/User/GetAllRecipes.js";


const UserRouter = Router()

UserRouter.put( "/:id" , EditProfileController)
UserRouter.get("/:id" , ViewProfileController)
UserRouter.get("/recipes/:id" , getAllUserRecipes)

export default UserRouter