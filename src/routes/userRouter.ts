import express from "express";
import { UserController } from "../Controller/userController";

export  const userRoutes=express.Router()
const userController=new UserController()
userRoutes.post("/user",userController.newUser)
userRoutes.get("/user/:id",userController.findUserbyId)
userRoutes.get("/user",userController.getUsers)
userRoutes.put("/user",userController.updateUser)
userRoutes.delete("/user",userController.deleteUserbyId)
