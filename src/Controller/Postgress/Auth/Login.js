import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const prisma = new PrismaClient();

const loginController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });

        if (!existingUser) {
            return res.status(404).json({
                message: "User Not Exist"
            });
        }

        if (existingUser.role !== 'USER') {
            return res.status(400).json({
                message: "Not found"
            });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordValid) {
            return res.status(403).json({
                message: "Invalid Email or password",
            });
        }

        const accessToken = jwt.sign({
            id: existingUser.id,
            email: existingUser.email
        }, process.env.ACCESS_SECRET, {
            expiresIn: "1h",
            issuer: "http://localhost:4000",
            subject: existingUser.id.toString(),
        });

        return res.json({
            message: "Login successful",
            data: {
                user: existingUser,
                token: accessToken,
            }
        });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).send("Internal Server Error");
    }
};

export default loginController;
