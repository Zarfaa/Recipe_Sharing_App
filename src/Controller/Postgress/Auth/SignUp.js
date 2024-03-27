import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const signUpController = async (req, res) => {
    const { name, email, password, dateOfBirth, gender, role, contactNumber } = req.body;

    try {
        const userExist = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (userExist) {
            return res.status(403).json({
                message: "Email Already Registered"
            });
        }

        const hashedPass = await bcrypt.hash(password, 8);


        const dob = new Date(dateOfBirth);

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPass,
                dateOfBirth: dob.toISOString(),
                gender,
                role,
                contactNumber
            }
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

