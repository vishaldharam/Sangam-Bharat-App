import product from "../../models/product"
import connectDb from "../../middeware/mongoose"
import mongoose from "mongoose"

const handler = async (req, res) =>{
    console.log(req.body)
    if(req.method == 'POST'){
        for(let i = 0;i<req.body.length;i++){
            let p = await product.findByIdAndUpdate(req.body[i]._id,req.body[i])

        }
        res.status(200).json({success:"success"})
    }
    else{
        res.status(400).json({error:"error"})

    }
  }
  
  export default connectDb(handler);