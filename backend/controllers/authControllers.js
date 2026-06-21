import adminModel from "../models/adminModel.js";
import sellerModel from "../models/sellerModel.js";
import sellerCustomerModel from "../models/chat/sellerCustomerModel.js";
import { responsReturn } from "../utiles/response.js";
import createToken from "../utiles/tokenCreate.js";
import bcrypt from 'bcrypt';

class authControllers {
     adminLogin =  async (req, res) => {
        const {email,password} = req.body
        // res.send("Admin login working");
        try {
            const admin = await adminModel.findOne({email}).select('+password')
            if(admin){
                const match = await  bcrypt.compare(password,admin.password)
                // console.log(match);
                if(match){
                    const token = await createToken({
                        id : admin.id,
                        role : admin.role
                    })
                    res.cookie('accessToken',token,{
                        expires : new Date(Date.now() +7*24*60*60*1000 )
                    })
                    responsReturn(res, 200,{token, message:'Login Success'})

                } else {
                    responsReturn(res, 404,{error:'Password Wrong'})
                }

            } else{

            responsReturn(res, 404,{error:'Email not Found'})
            }         
        } catch (error) {
            responsReturn(res, 500,{error: error.message})
        }
    }

    sellerRegister = async(req, res) => {
        // console.log(req.body)
        const {name,email,phone,password,agree} = req.body
        try{
            const getUser = await sellerModel.findOne({email})
            if(getUser){
                responsReturn(res,404,{error:'Email Already Exit'})
            } else {
                const seller = await sellerModel.create({
                 name,
                 email,
                 phone,
                 password: await bcrypt.hash(password,10),
                 agree,
                 method:'menually',
                })
                await  sellerCustomerModel.create({
                    myId:seller.id,  
                })
                const token = await createToken({id: seller.id,role:seller.role})
                res.cookie('accessToken',token,{
                        expires : new Date(Date.now() +7*24*60*60*1000 )
                    })

                responsReturn(res,201,{token,message: 'Seller registered successfully'})
            }
        } catch (error){    
                responsReturn(res,500,{error:'Internal server Error'})

        }
    }

     getUser = async(req, res) => {
        const {id,role} = req;
        try {
            if(role === 'admin'){
                const user = await adminModel.findById(id)
                responsReturn(res,200,{userInfo : user})
            }else{
                console.log('Seller Info')
            }
            
        } catch (error) {
            console.log(error.message)
        }
    }
    //End getUser Method
}

export default new authControllers();