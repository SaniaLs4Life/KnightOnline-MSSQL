import express from "express";
import config from "./config";

import itemsRoute from "./routes/items.route";

const app = express();

app.set("port", config.PORT);

app.use(itemsRoute);

export default app;
