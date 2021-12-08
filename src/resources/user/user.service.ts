import { getRepository } from "typeorm";

import { User } from "../../entity/User";

import md5 from 'crypto-js/md5';

import { userSignIn } from "./dtos/user.signin";
import { userSignUp } from "./dtos/user.signup";
import AppError from "../../shared/error/AppError";

export default class userService {

   

     async signin(user: userSignIn){
          const userRepository = getRepository(User);

          const { email, password} = user;

          const passwordHash = md5(password).toString();

          const existUser = await userRepository.findOne({where: {email, password: passwordHash}})

          if(!existUser){
               throw new AppError('Usuario não encontrado', 401);
          }
          return existUser;
     }

     async signup(user: userSignUp){
          return user;
     }

     
}