import User from "../../../Modal/MongoDB/User.js"

const ViewProfileController = async (req, res) => {
    const { id } = req.params
    try {
        const profile = await User.findById(id)

        if (!profile) {
            return res.status(404).json({
                message: "User Not Found!"
            })
        }

        return res.json({
            message : "User Profile",
            data : profile
        })
    }

    catch {
        error => {
            res.status(500).send(error)
        }
    }
}

export default ViewProfileController