import { Router } from "express";
import path from "path";
import { MatrixController } from "../controllers/matrix";

export const router = Router();


router.get("/", async (request, response) => {
    response.sendFile(path.join(__dirname, "../view/", "index.html"))
})

router.post("/matrix", MatrixController);