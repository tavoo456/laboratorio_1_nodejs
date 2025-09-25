import express from "express";
import dotenv from "dotenv";
import autoresRoutes from "./routes/autores.routes.js";
import categoriasRoutes from "../src/routes/categorias.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Hola mundo!");
});

app.use("/api/autores", autoresRoutes);
app.use("/api/categorias", categoriasRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto: ${PORT}`);
});
