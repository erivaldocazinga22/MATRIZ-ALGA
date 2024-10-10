import express from "express";
import cors from "cors";
import helmet from "helmet";
import compress from "compression";
import { router } from "./routers";
import { env } from "../env";


const server = express();
server
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compress({ level: 6 }))
    .use("/", router)

server.listen(3000, () => {
    console.log(`🟢 Server running in http://127.0.0.1:3000/`);
})
