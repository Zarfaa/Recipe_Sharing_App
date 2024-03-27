import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ViewSingleUserController = async (req, res) => {
    const { id } = parseInt(req.params)

    try {
        const user = await prisma.user.findUnique({ where: { id } })

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }

        return res.json({
            message: "User Retrived Successfully",
            data: user
        })
    }
    catch {
        error => {
            res.status(500).send(error)
        }

    }

}

export default ViewSingleUserController