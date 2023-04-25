const { Router } = require("express")

// const {getContract, saveContract}=require("../controllers/Contractcontroller")
import { saveContract } from "../controllers/Contractcontroller";
const router = Router()

// router.get("/", getContract)
router.post("/save", saveContract);

export default router;