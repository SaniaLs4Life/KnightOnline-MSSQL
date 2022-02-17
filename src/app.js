import express from "express";
import config from "./config";

import levelRoutes from "./routes/level.route";

const app = express();

app.set("port", config.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(levelRoutes);

export default app;
