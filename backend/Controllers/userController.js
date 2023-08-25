import User from "../Models/User.js";
import bcrypt from "bcrypt";


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
        
        return res.status(200).json({status:200,success:true,message:"Logged in successfully"});
    } catch (error) {
        return res.status(400),json({status:400, success:false, message:"Server error"})
    }
}