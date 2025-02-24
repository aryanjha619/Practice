const {model, Schema} = require('mongoose');
const userSchema = new Schema ({
    name :{
        type:String,
        required:[true,"please enter your name"],
    },
    email:{
        type:String,
        required:[true,"please enter your name"],
    },
    password:{
        type:String,
        required:[true,"please type 10 letters"],
        minLength:[10,"Please enter"],
    },
  //  number:{
    //    type:Number,
      //  required:[true,"minimum 10 numbers"],
    //},
    //address:[{
      //  country:{
        //    type:String,
        //},
        //city:{
          //  type:String,
        //}
    //}],
    //createdAt:{
      //  type:Date,
        //default:Date.now(),
    //},
    //resetPasswordToken: String,
    //resetPasswordTime:Date,
})
const useModel = model('User',userSchema);
module.exports = useModel;