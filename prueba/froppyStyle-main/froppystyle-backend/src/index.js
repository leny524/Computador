const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const CategoriaRoutes = require("./routes/Categoria");

const port = process.env.PORT || 10801;
//middleware
app.use(express.json());
app.use("/api", CategoriaRoutes);
app.use("/", (req, res) => {
  res.send("bienvenido a nuestra api");
});
//conexion a la BD
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((error) => console.log(error.message));
//puerto de escucha
app.listen(port, () => console.log("server escuchando en el puerto", port));
