import User from "../../../Modal/MongoDB/User.js"; 
import bcrypt from 'bcrypt';


const signUpController = async (req, res) => {
    const { name, email, password, DateOfBirth, Gender, role, contactNumber } = req.body;

    try {
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(403).json({
                message: "Email Already Registered"
            });
        }

        const hashedPass = await bcrypt.hash(password, 8);

        const newUser = await User.create({
            name,
            email,
            password : hashedPass,
            DateOfBirth,
            Gender,
            role,
            contactNumber
        });

        return res.json({
            message: "Welcome to Recipe Sharing App!",
            data: newUser
 
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
};

export default signUpController;