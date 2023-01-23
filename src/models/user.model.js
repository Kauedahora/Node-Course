const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true, // Este firstName é obrigatório, se não for passado não criará nada no banco!
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 7, // Este password, precisa ter no mínimo 7 caracteres. Se não, não criará nada no banco.
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
