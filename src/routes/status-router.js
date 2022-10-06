import express from "express";
import { getAllStatus } from "../controllers/status-controller.js";

const statusRouter = express.Router();

statusRouter.get("/status", getAllStatus);

export default statusRouter;
