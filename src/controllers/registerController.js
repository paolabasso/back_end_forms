//as funções que serão responsaveis pelo recebimento de request, e aqui elas encaminharão para a próxima camada, que será a camada de services.
//serão responsáveis pelo envio das responses ao client

const createRegister = (req, res) => {
    let register = req.body;
    //passe por validações
    
    console.log(register);
    return res.json(register)

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