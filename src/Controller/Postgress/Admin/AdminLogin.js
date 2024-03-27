import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const loginController = async (req, res) => {
    const { email } = req.body;

    try {
        const existingAdmin = await prisma.admin.findUnique({ where: { email } });

        if (!existingAdmin || existingAdmin.role !== 'ADMIN') {
            return res.status(403).send("Admin Not Exist!");
        }

        return res.json({
            message: "Login Successful!",
            data: existingAdmin
        });

    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
};

export default loginController;
