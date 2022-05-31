import mongoose from 'mongoose';

const { Schema } = mongoose;

const notas = new Schema({
  professor: { type: String, required: true },
  disciplina: { type: String, required: true },
  turma: { type: String, enum: ['turma1', 'turma2', 'turma3'], required: true },
  aluno: { type: String, required: true },
  notas: [{ type: Number, min: 0, max: 10 }],
  media: { type: Number, min: 0, max: 10 },
  resultado: { type: String, enum: ['aprovado', 'reprovado'], required: true }
});

export default mongoose.model('RegisterNotas', notas);

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
