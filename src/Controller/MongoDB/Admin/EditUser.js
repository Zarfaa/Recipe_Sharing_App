import User from "../../../Modal/MongoDB/User.js"

const EditUserController = async (req, res) => {

    const { id } = req.params
    const { role } = req.body

    try {
        const newUser = {
           role
        }
        const users = await User.findByIdAndUpdate(id, { $set: newUser }, { new: true })

        if (!users) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }

        return res.json({
            message: "Users Retrived Successfully",
            data: users
        })
    }
    catch {
        error => {
            res.status(500).send(error)
        }

    }

}

export default EditUserController