import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routers/user.routers";

const app = express();

app.use(morgan("dev"));
app.use(cors()); //se conecta a otros servidores
app.use(express.json());
app.use(userRoutes);

export default app;
