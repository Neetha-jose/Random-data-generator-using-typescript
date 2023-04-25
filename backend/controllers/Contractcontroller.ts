const ContractGen = require("../models/userSchema")

module.exports.getContract = async (req: any, res: any) => {
    const Contract = await ContractGen.find()
    res.send(Contract)
}

export const saveContract = async (req: any, res: any) => {
    // res.send("hhhhh")
   const {name}=req.body
    ContractGen.create({name})
    .then((data:any)=>{
        console.log("Added Succsssfully");
        console.log(data)
        res.send(data)
    })

}