import { Router } from "express";
import { AuthControllers } from "./auth.controller";

const authRouter = Router();

authRouter.post(
  "/register",
  AuthControllers.register
);
authRouter.post(
  "/login",
  AuthControllers.login
);

export default authRouter;
