import User from "../../../Modal/MongoDB/User.js"


const ViewSingleUserController = async (req, res) => {
    const {id} = req.params

    try {
        const user = await User.findById(id)

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }

        return res.json({
            message : "User Retrived Successfully",
            data : user
        })
    }
    catch {
        error => {
            res.status(500).send(error)
        }

    }

}

export default ViewSingleUserController