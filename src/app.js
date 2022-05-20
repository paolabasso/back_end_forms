import express from "express";
import dotenv from "dotenv";
import router from "./routes.js"

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

//essa função transformará o que vem do cliente em JSON
app.use(express.json());
app.use(router);


app.listen(port, ()=>{
    console.log(`Running Web Server at port: ${port}`);
});