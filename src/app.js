import express from "express";
import indexRoutes from "./routes/index.routes";
import { create } from "express-handlebars";
import path from "path";
import morgan from "morgan";
import cors from "cors";

const whitelist = ["http://localhost:5500/"];

const app = express();
app.use(cors({ origin: whitelist }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
);

//** Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//** Routes
app.use(indexRoutes);

//** Static files
app.use(express.static(path.join(__dirname, "public")));

export default app;
