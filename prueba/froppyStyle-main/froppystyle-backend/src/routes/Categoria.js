const express = require("express");
const router = express.Router();
const categoriaSchema = require("../models/Categoria");
//creacion de articulos
router.post("/categorias/create", (req, res) => {
  const categoria = categoriaSchema(req.body);
  categoria
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
});
router.get("/categorias/get", (req, res) => {
  categoriaSchema
    .find({ estado: "A" })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
});
router.get("/categorias/get/:id", (req, res) => {
  const { id } = req.params;
  categoriaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
});
router.put("/categorias/update/:id", (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  categoriaSchema
    .updateOne({ _id: id }, { $set: { nombre } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
router.delete("/categorias/delete/:id", (req, res) => {
  const { id } = req.params;
  const estado = "I";
  categoriaSchema
    .updateOne({ _id: id }, { $set: { estado } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
router.delete("/categorias/destroy/:id", (req, res) => {
  const { id } = req.params;
  categoriaSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;
