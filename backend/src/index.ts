import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import spotsRouter from "./routes/spots";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/spots", spotsRouter);

app.get("/", (_, res) => res.send("FishSpot API"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});