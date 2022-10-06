import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";

import connectToMongo from "./config/mongo.js";
import feedbackRouter from "./routes/feedback-router.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";
import categoryRouter from "./routes/category-router.js";
import statusRouter from "./routes/status-router.js";

const app = express();
dotenv.config();
connectToMongo();

app.use(bodyParser.json());

app.use("/api", feedbackRouter);
app.use("/api", categoryRouter);
app.use("/api", statusRouter);
app.use("/", ...swaggerMiddleware());

app.listen(process.env.PORT || 3000);

