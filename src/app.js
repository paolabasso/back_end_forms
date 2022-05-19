import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;


const notasRouter = express.Router();

notasRouter.route("/notas")
.post((req, res) => {
    const notas = new Notas(req.body);

    
}

)


app.listen(port, ()=>{
    console.log(`Running Web Server at port: ${port}`);
});