import jwt, { verify } from "jsonwebtoken"
import errorResponse from "../utils/errorResponse"

const VerifyAccess=(req,res,next)=>{
    //setting our token in headers
    const token=req.headers["auth-token"]
   //if no token
   if(!token){
    return errorResponse(res,401,`No Token Provided`)
   }else{
    // verify if token is valid
    const verifyToken=jwt.verify(token,process.env.SECRET_KEY,{expiresIn:"1d"})
    if(!verifyToken){
        return errorResponse(res,401,`Invalid token`)
    }else{
        // console.log(verifyToken.role!=="admin")
       if(verifyToken.role!=="admin"){
       return errorResponse(res,401,`You don't have access`)
       }else{
        return next()
       }
    }

   }

}

export default VerifyAccess