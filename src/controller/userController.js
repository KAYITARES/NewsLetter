import User from "../model/User";
import bcrypt, { hash } from 'bcrypt';
import errorResponse from "../utils/errorResponse";
import successResponse from "../utils/successResponse";

class UserController {
  static async createUser(req, res) {
    const {firstName,lastName,email,password,role}=req.body
    try {

        if(req.body.password!==req.body.confirmPassword){
            return errorResponse(res,403,`Password and confirm password is not matched`)
          
          
        }
     
        const hashPassword=bcrypt.hashSync(req.body.password,10)

      const user = await User.create({firstName,lastName,email,password:hashPassword,role});
     const status=201

     const msg=`user successfuly created`
     const data=user
     successResponse(res,status,msg,data)
    } catch (error) {
      if (error.code == 11000) {
        return errorResponse(res,403,`User already exist`)
       
      } else {
        return errorResponse(res,500,error)
       
      
      }
    }
  }
  static async getAllUsers(req,res){
    const users= await User.find();
    if(!users || users.length==0){
      return errorResponse(res,401,'no user found')
      
    }else if(users){
      const status=200
      const msg=`all ${users.length} Users Found`
      const data=users
      return successResponse(res,status,msg,data)
      
    }
  }
  static async deleteAllUsers(req,res){
    const users=await User.deleteMany()
    return successResponse(res,200,'alll users deleted',users)
   
  }
  static async getOneUser(req,res){
    const id=req.params.ido
    const user=await User.findById(id)
    if(!user){
      return errorResponse(res,401,`no user found with that id : ${id}`)
  
    }else{

   return successResponse(res,200,`user successfuly retrieved`,user)
    }


  }
  static async deleteOneUser(req,res){
    const id=req.params.id
    const user= await User.findByIdAndDelete(id)
    if(!user){
      errorResponse(res,401,`user with id ${id} not found`)
    }else{
      successResponse(res,200,`user successfuly deleted`,user)
    }
  }
  static async updateUser(req,res){
    const id=req.params.id
    const user=await User.findByIdAndUpdate(id,req.body,{new:true})
    if(!user){
      errorResponse(res,401,`user with id ${id} not found`)
    }else{
      successResponse(res,200,`user successfuly updated`,user)
    }
  }
}
export default UserController;
