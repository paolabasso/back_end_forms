import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes.js";
import { connectionDB } from "./database/mongo.js";


dotenv.config();
const app = express();
connectionDB();

const port = process.env.PORT || 3000;

app.use(cors());

//essa função transformará o que vem do cliente em JSON
app.use(express.json());

app.use(router);


app.listen(port, ()=>{
    console.log(`Running Web Server at port: ${port}`);
});