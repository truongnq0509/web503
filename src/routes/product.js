import express from "express";
import { get, create, update, remove } from "../controllers/ProductController";

const router = express.Router();

router.get("/", get);
router.get("/:id", get);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
