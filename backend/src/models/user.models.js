import bcryptjs from "bcryptjs";
import mongoose from "mongoose";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_EXPIRY, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_EXPIRY, REFRESH_TOKEN_SECRET } from "../config/server.js";

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true,
        unique : true
    },
    password: {
        type : String,
        required : true
    },
    forgetPasswordToken :{
        type : String
    },
    forgotPasswordTokenExpiry:{
        type : Date
    },
    emailVerificationToken : {
        type: String,
    },
    emailVerificationTokenExpiry : {
        type: Date,
    },
    refreshToken :{
type: String
    }

}, {timestamps : true});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    const hashPassword =await bcryptjs.hash(this.password,16);
    this.password = hashPassword;
    next();
})

userSchema.methods.comparePassword = async function(password){
    const isMatch = await bcryptjs.compare(password,this.password);
    return isMatch;
}

userSchema.methods.generateTomporaryToken = function(){
    const unHashedToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    const tokenExpiry = Date.now() + 10 * 60 * 1000;
    return {
     hashedToken,
     unHashedToken,
     tokenExpiry   
    }
}

userSchema.methods.genrateAccessToken = function() {
    return jwt.sign({id : this._id, email : this.email},ACCESS_TOKEN_SECRET, {expiresIn : ACCESS_TOKEN_EXPIRY});
}

userSchema.methods.genrateRefreshToken = function() {
    return jwt.sign({id : this._id},REFRESH_TOKEN_SECRET, {expiresIn : REFRESH_TOKEN_EXPIRY});
}

userSchema.methods.verifyToken = function(token){
    return jwt.verify(token,ACCESS_TOKEN_SECRET);
}

const User = mongoose.model("User",userSchema);
export default User;