import { Router } from "express";
import loginController from "../../Controller/MongoDB/Auth/Login.js";
import signUpController from "../../Controller/MongoDB/Auth/SignUp.js";


const AuthRouter = Router()


AuthRouter.post( "/login" , loginController)
AuthRouter.post( "/signup" , signUpController)

export default AuthRouter