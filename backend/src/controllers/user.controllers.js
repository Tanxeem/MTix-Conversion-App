import { BACKEND_URL } from "../config/server.js";
import User from "../models/user.models.js";
import { forgotPasswordMailGenContent } from "../utils/mail.js";


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
    await User.findByIdAndUpdate(req.user._id, { 
        $set: {
            refreshToken: undefined, 
        },

    }, { new: true })

        res.clearCookie("accessToken", { httpOnly: true, secure: true }).clearCookie("refreshToken", { httpOnly: true, secure: true });

        return res.status(200).json({
            success: true,
            message: "User logged out successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: ["Internal Server Error", error.message],
        });
    }
}

const forgotpassword = async (req, res) => {
        const {email} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success: false,
                message: "User not found"
            })
        }

        const [hashedToken, tokenExpiry] = await user.generateTomporaryToken();

        user.forgetPasswordToken = hashedToken;
        user.forgotPasswordTokenExpiry = tokenExpiry;
        await user.save({validateBeforeSave: false});

        const resetUrl = `${BACKEND_URL}/api/v1/users/resetpassword/${hashedToken}`;
        const mailGenContent = forgotPasswordMailGenContent(user.name, resetUrl);

        const emailOptions = {
            email,
            subject: "Password Reset",
            mailGenContent,
        };

        await sendEmail(emailOptions);

        return res.status(200).json({
            success: true,
            message: "Password reset email sent successfully",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: ["Internal Server Error", error.message],
        });
    }
}

const resetpassword = async (req, res) => {
    const { token } = req.params;
    const { password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        return res.status(400).json({
            success: false,
            message: "Passwords do not match",
        });
    }
    try {
        const user = await User.findOne({ forgetPasswordToken: token });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Invalid token",
            });
        }

        if (user.forgotPasswordTokenExpiry < Date.now()) {
            return res.status(401).json({
                success: false,
                message: "Token expired",
            });
        }

        user.password = password;
        user.forgetPasswordToken = undefined;
        user.forgotPasswordTokenExpiry = undefined;
        await user.save();

        return res.status(200).json({
            success: true,
            message: "Password changed successfully",
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: ["Internal Server Error", error.message],
        });
    }
}

const refreshAccessToken = async (req, res) => {
    const { refreshToken } = req.cookies.refreshToken || req.body.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized Request",
        });
    }

    try {
        const decodedToken = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id);
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid Refresh Token",
            });
        }
    
        if (refreshToken !== user?.refreshToken) {
            return res.status(403).json({
                success: false,
                message: "Refresh token is expired or used",
            });
        }
    
        // Generate tokens using the instance method
        const { accessToken, newRefreshToken } = await generateAccessAndRefreshToken(user._id);

        const cookieOptions = {
            httpOnly: true,
            secure: true,
        }

        return res.status(200)
        .cookie("accessToken", accessToken, cookieOptions)
        .cookie("refreshToken", newRefreshToken, cookieOptions)
        .json({
            status: "success",
            message: "Access token refreshed successfully",
            data: {
                accessToken,
                refreshToken: newRefreshToken,
            },
        });
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: ["Unauthorized Request", error.message],
        });
        
    }

};

export {signUp, login, logout, forgotpassword, resetpassword, refreshAccessToken};