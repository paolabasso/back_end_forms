//onde defineremos as rotas dos métodos
import { Router } from "express";
import { createRegister, getAllRegisters, deleteRegister, updateRegister } from "./controllers/registerController.js";

const router = Router();

//rota de exemplo
router.get("/", (req, res) => {
    return res.json({
        message: "to funcionando"
    })
})

router.post("/registers", createRegister);

router.get("/registers", getAllRegisters);

router.put("/registers/:id", updateRegister);

router.delete("/registers/:id", deleteRegister);


export default router;

