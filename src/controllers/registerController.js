//as funções que serão responsaveis pelo recebimento de request, e aqui elas encaminharão para a próxima camada, que será a camada de services.
//serão responsáveis pelo envio das responses ao client

import registerNotas from "../models/registerModel.js";

const createRegister = (req, res) => {
    // let register = req.body;
    let testeDB = new registerNotas(req.body);
    testeDB.save();
    //passe por validações
    
    console.log(testeDB);
    return res.json(testeDB);

    //o que queremos quando chega a request
    //o que queremos responder ao cliente
}

//Com Callback
// const getAllRegisters = (req, res) => {
//     let listaDeRegistros = {};
//     registerNotas.find(listaDeRegistros, (err, registernotas) => {
//         if(err){
//             return res.send(err)
//         }else{
//             return res.json(registernotas);
//         }
//     })
// }

//Sem Callback, e com async
const getAllRegisters = async (req, res) => {
    try{
        const listaDeRegistros = await registerNotas.find();
        res.json(listaDeRegistros)
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

const updateRegister = (req, res) => {

}

const deleteRegister = (req, res) => {

}

export { createRegister, getAllRegisters, updateRegister, deleteRegister };