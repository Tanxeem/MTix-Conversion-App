import express from "express";
import { userforgotPasswordValidator, userLoginValidator, userRegistrationValidator, userresetPasswordValidator } from "../validator/user.validator.js";
import validate from "../middleware/validator.middleware.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";
import { forgotpassword, login, logout, refreshAccessToken, resetpassword, signUp } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/signup",validate(userRegistrationValidator), signUp )
router.post("/login",validate(userLoginValidator), login )
router.get("/logout", isLoggedIn, logout )


router.post("/forgotpassword",validate(userforgotPasswordValidator), forgotpassword )
router.post("/resetpassword",validate(userresetPasswordValidator), resetpassword )

router.post("/refreshtoken", refreshAccessToken )


export default router;