var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const userSchema = new Schema({
      fullName: {
        type: String,
        required: [true, 'fullName not provided']
      },
      email:{
        type: String,
        unique: [true, "email alredy exists in the db"],
        lowercase: true,
        trim: true,
        required: [true, 'email not provided'],
        
        
        },
        role: {
            type: String,
            enum: ["normal", "admin"],
            required: [true, 'role not provided'],
         },
         password : {
            type: String,
            required: [true, 'password not provided'],
      },
      preferences: {
         type: [String],
         default: ['general'],
         required: true
     },
      created:
      {  type: Date,
         default: Date.now 

      }
        
      })

      module.exports = mongoose.model('user', userSchema);