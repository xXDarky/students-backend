import mongoose, { Schema } from 'mongoose';

const studentSchema = new Schema({ 
    first_name:{type:String, maxlength:25, required:true},
    last_name:{type:String, maxlength:25, required:true},
    email:{type:String, maxlength:50, unique:true, required:true},
    gender:{type: String},
    birth_date:{type: Date},
    address:{type:String, maxlenght: 120},
    createdAt: {type:Date, default: Date.now},
    status: {type:Number, default:1}
});
const Student = mongoose.model('student', studentSchema);
export default Student; 