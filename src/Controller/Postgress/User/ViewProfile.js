import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ViewProfileController = async (req, res) => {
    const { id } = req.params;
    try {
        const profile = await prisma.user.findUnique({ where: { id: parseInt(id) } });

        if (!profile) {
            return res.status(404).json({
                message: "User Not Found!"
            });
        }

        return res.json({
            message: "User Profile",
            data: profile
        });
    } catch (error) {
        console.error("Error viewing profile:", error);
        return res.status(500).send(error);
    }
};

export default ViewProfileController;
