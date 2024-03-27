import { Router } from "express";
import loginController from "../../Controller/Postgress/Auth/Login.js";
import signUpController from "../../Controller/Postgress/Auth/SignUp.js";


const AuthRouter = Router()


AuthRouter.post( "/login" , loginController)
AuthRouter.post( "/signup" , signUpController)

export default AuthRouter