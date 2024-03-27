import { Router } from "express";
import AdminloginController from "../../Controller/MongoDB/Admin/AdminLogin.js";
import ViewAllUsersController from "../../Controller/MongoDB/Admin/ViewAllUsers.js";
import EditUserController from "../../Controller/MongoDB/Admin/EditUser.js";
import ViewSingleUserController from "../../Controller/MongoDB/Admin/ViewSingleUser.js";
import DeleteUser from "../../Controller/MongoDB/Admin/DeleteUser.js"

const AdminRouter = Router()

AdminRouter.post("/login", AdminloginController)
AdminRouter.get("/", ViewAllUsersController)
AdminRouter.put("/:id", EditUserController)
AdminRouter.get("/:id", ViewSingleUserController)
AdminRouter.delete("/:id", DeleteUser)

export default AdminRouter