import User from "../../../Modal/MongoDB/User.js"

const EditProfileController = async (req, res) => {
    const { id } = req.params
    const { email, name, password } = req.body
    try {
        const newUser = {
            email,
            password,
            name
        }
        const updatedUser = await User.findByIdAndUpdate(id, { $set: newUser }, { new: true })
        if (!updatedUser) {
          return res.status(404).json({ message: "User Not Found!"})
        }
        return res.json({
            message : "Profile Updated Successfully",
            data: newUser
        })
    }
    catch {
        error => {
            res.status(500).send(error)
        }
    }

}

export default EditProfileController