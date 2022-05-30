//as funções que serão responsaveis pelo recebimento de request, e aqui elas encaminharão para a próxima camada, que será a camada de services.
//serão responsáveis pelo envio das responses ao client

import registerNotas from "../models/registerModel.js";

const createRegister = (req, res) => {
    // let register = req.body;
    let testeDB = new registerNotas(req.body);
    testeDB.save();
    //passe por validações
    
    console.log(testeDB);
    return res.status(201).json(testeDB);

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

//os métodos findByIdAndUpdate e findByIdAnDelete são implementados junto com o mongoose então conseguem realizar as alterações que precisamos junto ao banco de dados.

const updateRegister = async (req, res) => {
    try{
    const register = await registerNotas.findByIdAndUpdate(
        req.params.id,
        req.body,
        //new for true - ele retorna o objeto atualizado
        //new for false - ele retorna o objeto anterior
        //upser - se o objeto passado, não existir: true - cria o objeto; false - não cria;
        
        { new: true, upsert: true }
    );
    res.json(register)
    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }

}


const deleteRegister = async (req, res) => {
    try {
        await registerNotas.findByIdAndDelete(req.params.id);
        res.status(204).json()
    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
}

export { createRegister, getAllRegisters, updateRegister, deleteRegister };