import { Router } from "Express";
import userRouter from "./user.routes";

const routes = Router();

routes.use("./user", userRouter)

export default routes;