import errorResponse from "../utils/errorResponse"
import jwt from 'jsonwebtoken'

const VerifyAccess=(req,res,next)=>{
    const token=req.headers["x-auth-token"]
    if(!token){
        return errorResponse(res,401,`No token provided`)
    }else{
        try {
            const verifyToken=jwt.verify(token,process.env.SECRET_KEY,{expiresIn:"1d"})
           if(verifyToken.role!=="admin"){
            return errorResponse(res,401,`You don't have access`)
           }else{
            return next()
           }
            
        } catch (error) {
            if(error.name="JsonWebTokenError")
            return errorResponse(res,401,'Invalid Token or Expired Token')
            
        }
    }

}
export default VerifyAccess