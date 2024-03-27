import User from "../../../Modal/MongoDB/User.js"

const DeleteUsersController = async (req, res) => {
    const {id} = req.params

    try {
        const users = await User.findByIdAndDelete(id)

        if (!users) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }

        return res.json({
            message : "Users Deleted Successfully",
            data : users
        })
    }
    catch {
        error => {
            res.status(500).send(error)
        }

    }

}

export default DeleteUsersController