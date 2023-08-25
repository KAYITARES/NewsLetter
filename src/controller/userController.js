import User from "../model/User";

class UserController {
  static async createUser(req, res) {
    try {

        if(req.body.password!==req.body.confirmPassword){
            return res.status(403).json({
                message:"Password and confirm password is not matched"
            })
        }
      const user = await User.create(req.body);
      return res.status(201).json({
        message: `user successfuly created`,
        data: user,
      });
    } catch (error) {
      if (error.code == 11000) {
        return res.status(403).json({
          message: `User already exist`,
        });
      } else {
        return res.status(500).json({  
            message:`all ${users.length} Users Found`,
     
        })
      
      }
    }
  }
  static async getAllUsers(req,res){
    const users= await User.find();
    if(!users || users.length==0){
        return res.status(401).json({
            message:'no user found'
        })
    }else if(users){
        return res.status(200).json({
            message:`all ${users.length} Users Found`,
            data:users
        })
    }
  }
  static async deleteAllUsers(req,res){
    const users=await User.deleteMany()
    return res.status(200).json({
        message:'all users delete',
        data:users
    })
  }
}
export default UserController;
