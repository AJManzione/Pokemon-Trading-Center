const { Schema, model } = require('mongoose');


const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const checkPassword = function(input) {
    const passw = /^[A-Za-z]\w{7,14}$/;
    if (input.match(passw)) {
      return true;
    }
    return false;
  }

  const pokemonSchema = new Schema({
    //Matt
    pokemon: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      require: true,
      trim: true,
    },
    sprite: {
      type: String,
      required: true,
      trim: true,
    },
    entry: {
      type: String,
      required: true,
      trim: true
    }
  //   user: [
  //     {
  //       type: Schema.Types.ObjectId,
  //       ref: "User",
  //     },
  //   ],
  });

  
const userSchema = new Schema({
    username: {
        type: String,
        required: 'User name is required',
        minlength: 1,
        maxlength: 50,
        trim: true
    },

    email:{
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: validateEmail,
            message: 'this is not a valid email format'
        }
    },
    password:{
        type: String,
        required: true,
        validate: {
            validator: checkPassword,
            message: 'choose a more secure password (between 7 and 14 characters long'
        }
    },
    sprite:{
        type: String
    },
    pokemonCaught:[pokemonSchema]


})
const User = model('User', userSchema);

module.exports = User