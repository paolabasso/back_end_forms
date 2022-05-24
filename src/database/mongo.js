import mongoose from "mongoose";

const connectionDB = () => {

const nomeDB = "NotasAlunos"
const db = mongoose.connect(`mongodb+srv://rest-api-user:h4xPbu5iTFray7dR@cluster0.tujck.mongodb.net/${nomeDB}?retryWrites=true&w=majority`)

db.catch((error) => {
    console.log(error)
})
//Comando utilizado para retornar "resultado" da conexão com o banco de dados
// .then((result) => {
//     console.log(result)
// })

}

export {connectionDB}