import mongoose from 'mongoose';
const { Schema } = mongoose;
const userShecma=new Schema({
    name:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
},
{timestamps:true}
)
export default mongoose.models.User || mongoose.model("User", userShecma);