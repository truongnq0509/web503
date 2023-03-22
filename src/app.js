import express from "express";
import mongoose from "mongoose";
import initRoutes from "./routes";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/shoppee");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);

export const viteNodeApp = app;
