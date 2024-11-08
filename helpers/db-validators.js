const User = require("../models/User");

const emailExiste = async (email = "") => {
  const existeEmail = await User.findOne({ email });
  if (existeEmail) {
    throw new Error(`El correo: ${email}, ya está registrado`);
  }
};

const existeUsuarioPorId = async (id) => {
  const existeUsuario = await User.findById(id);
  if (!existeUsuario) {
    throw new Error(`El id ${id}: no existe `);
  }
};

module.exports = {
  emailExiste,
  existeUsuarioPorId,
};
