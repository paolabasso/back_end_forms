import mongoose from "mongoose";

const { Schema } = mongoose;

const notas = new Schema ({
    professor: String,
    disciplina: String,
    turma: String,
    aluno: String,
    notas: [Number],
    media: Number,
    resultado: String
});

export default mongoose.model("RegisterNotas", notas);




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