import adminModel from "../models/adminModel.js";
import { responsReturn } from "../utiles/response.js";

class authControllers {
    async adminLogin (req, res) {
        const {email,password} = req.body
        // res.send("Admin login working");
        try {
            const admin = await adminModel.findOne({email}).select('+password')
            if(admin){

            } else{

            responsReturn(res, 404,{error:'Email not Found'})
            }         
        } catch (error) {
            responsReturn(res, 500,{error: error.message})
        }
    }
}

export default new authControllers();