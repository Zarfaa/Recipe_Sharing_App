import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const EditProfileController = async (req, res) => {
    const { id } = req.params;
    const {name, email, password, dateOfBirth, gender,  contactNumber } = req.body;

    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: parseInt(id)
            },
            data: {
                email,
                password,
                name,
                dateOfBirth, 
                gender,  
                contactNumber
            }
        });

        if (!updatedUser) {
            return res.status(404).json({ message: "User Not Found!" });
        }

        return res.json({
            message: "Profile Updated Successfully",
            data: updatedUser
        });
    } catch (error) {
        console.error("Error updating profile:", error);
        return res.status(500).send(error);
    }
};

export default EditProfileController;
