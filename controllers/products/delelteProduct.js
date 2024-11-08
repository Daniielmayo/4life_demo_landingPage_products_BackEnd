const { response } = require("express");
const User = require("../../models/User");
const Products = require("../../models/Products");

const deleteProduct = async (req, res = response) => {
  const { uid, productId } = req.params;

  try {
    const user = await User.findById(uid);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const productoEliminado = await Products.findByIdAndDelete(productId);

    if (!productoEliminado) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(200).json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    res.status(500).json({ error: "Error al eliminar producto" });
  }
};

module.exports = deleteProduct;
