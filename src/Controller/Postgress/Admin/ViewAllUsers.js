import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ViewUsersController = async (req, res) => { 
    try {
        const users = await prisma.user.findMany( { where : { role : "USER"}});

        if (!users || users.length === 0) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        return res.json({
            message: "Users Retrieved Successfully",
            data: users
        });
    } catch (error) {
        return res.status(500).send(error);
    }
};

export default ViewUsersController;
