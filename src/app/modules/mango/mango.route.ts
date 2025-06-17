import { Router } from "express";
import { mangoController } from "./mango.controller";
const mangoRouter = Router();

mangoRouter.put("/:id", mangoController.updateMango);
mangoRouter.delete("/:id", mangoController.deleteMango);

export default mangoRouter;
