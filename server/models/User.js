const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs')


const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const checkPassword = function(input) {
    const passw = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (input.match(passw)) {
      return true;
    }
    return false;
  }

  const pokemonSchema = new Schema({
    
    // name: {
    //   type: String,
    //   required: true,
    //   trim: true,
    //   toUpper: true
    // },
    // type: {
    //   type: String,
    //   require: true,
    //   trim: true,
    // },
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
        required: true,
        minlength: 1,
        maxlength: 50,
        unique: true,
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
            message: 'choose a more secure password (must be at least 8 characters long, contain at least one lower-case letter, one upper-case letter, and one number or one special character)'
        }
    },
    sprite:{
        type: String,
    },
    pokemonCaught:[pokemonSchema]
},
{
  toJSON: {
      virtuals: true,
      getters: true
  }
})

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema
  .virtual('pokemonCount')
  .get(function(){
      return this.pokemonCaught.length
  })

const User = model('User', userSchema);

module.exports = User