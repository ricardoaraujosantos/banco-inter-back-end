import { Router } from "express";

const userRouter = Router();

userRouter.post("./siginin", (request, response) =>{
    return response.send("Entrando com o usuario")
})

userRouter.post("./siginup", (request, response) =>{
    return response.send("Cadastrando um usuario")
})

export default userRouter;