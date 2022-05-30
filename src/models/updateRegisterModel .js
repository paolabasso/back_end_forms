import mongoose from "mongoose";

const { Schema } = mongoose;

const updateNotas = new Schema ({
    professor: String,
    disciplina: String,
    turma: String,
    aluno: String,
    notas: [Number],
    media: Number,
    resultado: String
});

export default mongoose.model("UpdateRegisterNotas", updateNotas);




// register = {
//     id: "",
//     professor: string,
//     disciplina: string,
//     turma: string,
//     aluno: "",
//     notas:[],
//     media:"",
//     resultado: "",
//     };