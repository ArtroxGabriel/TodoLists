import { Router } from "express";
import userRouter from "./auth";

const router: Router = Router()

router.use("/user", userRouter)

export default router

