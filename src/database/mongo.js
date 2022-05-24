import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const dadosdb = process.env.DB;

const connectionDB = () => {


const db = mongoose.connect(dadosdb)

db.catch((error) => {
    console.log(error)
})
//Comando utilizado para retornar "resultado" da conexão com o banco de dados
// .then((result) => {
//     console.log(result)
// })

}

export {connectionDB}