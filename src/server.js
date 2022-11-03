import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectToMongo from "./config/mongo.js";
import feedbackRouter from "./routes/feedback-router.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";
import categoryRouter from "./routes/category-router.js";
import statusRouter from "./routes/status-router.js";
import userRouter from "./routes/user-router.js";
import commentRouter from "./routes/comment-router.js";

const app = express();
dotenv.config();
connectToMongo();

app.use(bodyParser.json());
app.use("/images", express.static("public/storage"));

app.use("/api", cors(), feedbackRouter);
app.use("/api", cors(), categoryRouter);
app.use("/api", cors(), statusRouter);
app.use("/api", cors(), userRouter);
app.use("/api", cors(), commentRouter);
app.use("/", ...swaggerMiddleware());

app.listen(process.env.PORT || 3000);
