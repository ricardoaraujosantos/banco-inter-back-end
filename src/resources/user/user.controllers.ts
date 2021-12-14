import { Request, Response } from 'Express';
import userService from './user.service';

export class userController{

    async siginin(req:Request, res:Response){
        const { email, password}= req.body;
        const userServic = new userService();
        const user = await userServic.signin({email, password})

        
        return res.status(200).send(user)
    }

    async siginup(req:Request, res:Response){

        const UserService = new userService();
        const users = await UserService.signup(req.body);
        return res.status(201).send(users)
    }
}