import "dotenv/config";
import express from "express";
import router from "./routes";
import { Server, Socket } from "socket.io";
import http from "http";
import cors from "cors";

const app = express();
app.use(cors());
const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
    cors: {
        origin: "*"
    }
});

io.on("connection", socket => {
    console.log(`Usuario conectado ao socket. Socket: ${socket.id}`)
})

app.use(express.json());
app.use(router);


export { serverHttp, io }