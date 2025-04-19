import User from "../models/user.models.js";


const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.genrateAccessToken();
        const refreshToken = user.genrateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave: false});

        return {accessToken, refreshToken};
    } catch (error) {
        console.error("Error generating access and refresh tokens:", error);
    }
}

const signUp = async (req, res) => {
        const {name, email, password} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(401).json({
                success: false,
                message: "User already exists"
            })
        }

        const user = await User.create({name, email, password});
        if(!user){
            return res.status(401).json({
                success: false,
                message: "User not created"
            })
        }
        await user.save();

        return res.status(200).json({
            success: true,
            message: "User created successfully",
            user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const login = async (req, res) => {
        const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success: false,
                message: "User not found"
            })
        }

        const isMatchPassword = await user.comparePassword(password);
        if(!isMatchPassword){
            return res.status(401).json({
                success: false,
                message: "Invalid Email & Password"
            })
        }

        const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id);

        const logedInUser = await User.findById(user._id).select("-password -refreshToken");

        const cookieOption = {
            httpOnly: true,
            secure: true,
        }

        return res.status(200)
        .cookie("accessToken", accessToken, cookieOption)
        .cookie("refreshToken", refreshToken, cookieOption)
            .json({
            success: true,
            message: "User logged in successfully",
            user: logedInUser,
            data: {accessToken, refreshToken}
        })
    
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const logout = async (req, res) => {
    
    try {
        
    } catch (error) {
        
    }
}

const forgotpassword = async (req, res) => {

    try {
        
    } catch (error) {
        
    }
}

const resetpassword = async (req, res) => {

    try {
        
    } catch (error) {
        
    }
}

export {signUp, login, logout, forgotpassword, resetpassword};