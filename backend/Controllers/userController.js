import User from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const register = async (req,res) =>{
    try {
        const {name, email, password} = req.body;

        const response = await User.findOne({email}).exec();
        if(response) return res.status(403).json({status:403, success: false, message: "You're already Registered..!"});

        const pass = await bcrypt.hash(password,10);

        const user = new User({
            name, email, password: pass
        });
        await user.save();
        return res.status(200).json({status:200, success: true, message: "Registration Successful."});

    } catch (error) {
        return res.status(400).json({status:400,success:false, message: "Controller error"});
    }
}

export const login = async (req,res) =>{
    try {
        const {email, password} = req.body;

        const response = await User.findOne({email}).exec();
        if(!response) return res.status(400).json({status:400, success:false, message:"You are not registered"});

        const pass = await bcrypt.compare(password,response.password);

        if(!pass) return res.status(400).json({status:400,success:false, message:"Incorrect password"});
        
        const token = jwt.sign({ userId:response._id }, process.env.jwt_secret);
        console.log(token, "token")
        return res.status(200).json({status:200,success:true,message:"Logged in successfully", user: response, token: token });
    } catch (error) {
        return res.status(400).json({status:400, success:false, message:"Server error"})
    }
}

export const getCurrentUser = async(req,res) =>{
    try {
        const {getTokenFromLs} = req.body;
        console.log(getTokenFromLs)
        if(!getTokenFromLs) return res.status(404).json({success:false, message: "Token not found"});
        
        const deCodeToken = jwt.verify(getTokenFromLs,process.env.jwt_secret);
        
        const userId = deCodeToken.userId;
        const getUser = await User.findById(userId);

        if(getUser) return res.status(200).json({success:true, message: "got the user", user: getUser});

    } catch (error) {
        return res.status(500).json({success:false, message: error})
    }
}