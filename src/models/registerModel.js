import mongoose from "mongoose";

const { Schema } = mongoose;

//Validações
const notas = new Schema ({
    professor: {type: String, required: true },
    disciplina: {type: String, required: true },
    turma: {type: String, required: true, enum: ['turma1', 'turma2', 'turma3'] },
    aluno: {type: String, required: true },
    notas: [{ type: Number, required: true, min: 0, max: 10 }],
    media: {type: Number, min: 0, max: 10},
    resultado: {type: String, required: true, enum: ['aprovado', 'reprovado'] },
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