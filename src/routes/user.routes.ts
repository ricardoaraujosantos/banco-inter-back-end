import { Router } from "express";
import { userController } from "../resources/user/user.controllers";

const userRouter = Router();
const userControllers = new userController();

userRouter.post("./siginin", userControllers.siginin)

userRouter.post("./siginup", userControllers.siginup)

export default userRouter;