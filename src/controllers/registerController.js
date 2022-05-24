//as funções que serão responsaveis pelo recebimento de request, e aqui elas encaminharão para a próxima camada, que será a camada de services.
//serão responsáveis pelo envio das responses ao client

import registerModel from "../models/registerModel.js";

const createRegister = (req, res) => {
    // let register = req.body;
    let testeDB = new registerModel(req.body);
    testeDB.save();
    //passe por validações
    
    console.log(testeDB);
    return res.json(testeDB);

    //o que queremos quando chega a request
    //o que queremos responder ao cliente
}



const getAllRegisters = (req, res) => {
 
}

const updateRegister = (req, res) => {

}

const deleteRegister = (req, res) => {

}

export { createRegister, getAllRegisters, updateRegister, deleteRegister };