import { Router } from "express";
import AdminloginController from "../../Controller/Postgress/Admin/AdminLogin.js";
import ViewAllUsersController from "../../Controller/Postgress/Admin/ViewAllUsers.js";
import EditUserController from "../../Controller/Postgress/Admin/EditUser.js";
import ViewSingleUserController from "../../Controller/Postgress/Admin/ViewSingleUser.js";
import DeleteUser from "../../Controller/Postgress/Admin/DeleteUser.js"

const AdminRouter = Router()

AdminRouter.post("/login", AdminloginController)
AdminRouter.get("/", ViewAllUsersController)
AdminRouter.put("/:id", EditUserController)
AdminRouter.get("/:id", ViewSingleUserController)
AdminRouter.delete("/:id", DeleteUser)

export default AdminRouter