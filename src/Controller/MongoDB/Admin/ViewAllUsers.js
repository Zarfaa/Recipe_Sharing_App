import User from "../../../Modal/MongoDB/User.js"

const ViewUsersController = async (req, res) => {

    try {
        const users = await User.find({}, "email")

        if (!users) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }

        return res.json({
            message : "Users Retrived Successfully",
            data : users
        })
    }
    catch {
        error => {
            res.status(500).send(error)
        }

    }

}

export default ViewUsersController