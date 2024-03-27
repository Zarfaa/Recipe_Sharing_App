import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 200
    },
    DateOfBirth: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user' , 'admin'],
        default: 'user' 
    },
    contactNumber: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", UserSchema);

export default User;
