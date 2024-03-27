import Admin from "../../../Modal/MongoDB/User.js";

const loginController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingAdmin = await Admin.findOne({ email, role: "admin" });

        if (!existingAdmin) {
            return res.status(403).send("Admin Not Exist!");
        }

        return res.json({
            message: "Login Successful!",
            data: existingAdmin
        });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).send("Internal Server Error");
    }
};

export default loginController;
