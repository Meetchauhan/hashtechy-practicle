import { User } from "../model/user.model.js";
import { generateToken } from "../util/generateToken.js";

export const userLogin = async (req, res) => {
    const { email, password } = req.body;


    try {
        const user = await User.findOne({ email });
        if (user?.email === email && user?.password === password) {
            const token = await generateToken(res, user?._id)
            res.status(200).json({
                success: true, message: "User login success fully", data: {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                }, token: token
            })
        } else {
            res.status(200).json({ success: false, message: "Invalid email or password" })
        }
    } catch (e) {
        res.status(500).json({ success: false, message: "Server error" })
    }
}