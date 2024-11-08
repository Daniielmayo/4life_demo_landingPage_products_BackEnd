const { response } = require("express");
const Products = require("../../models/Products");
const User = require("../../models/User");

const createProductsUser = async (req, res = response) => {
  const {
    uid,
    nameProduct,
    descriptionProduct,
    imageProduct,
    price,
    priceOff,
    saving,
    link4lifeProduct,
    uuidImage,
  } = req.body;

  try {
    const user = await User.findById(uid);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const newProduct = new Products({
      nameProduct,
      descriptionProduct,
      imageProduct,
      price,
      priceOff,
      saving,
      link4lifeProduct,
      uuidImage,
    });

    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ error: "Error al crear producto" });
  }
};

module.exports = createProductsUser;
