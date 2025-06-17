import express, { Request, Response } from "express";
import userRouter from "./app/modules/user/user.route";
import authRouter from "./app/modules/auth/auth.router";
const app = express();

// middleware
app.use(express.json());

app.use("/api/auth", authRouter)
app.use('/api/user', userRouter)


app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: "Route not found",
  });
});

export default app;
