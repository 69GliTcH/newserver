
import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { compilerRouter } from "./routes/compilerRouter";
const app = express();

app.use(express.json());
// app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["https://livecodepaint.netlify.app"],
  })
);
config();

app.use("/compiler", compilerRouter);

dbConnect();
const port=process.env.PORT || 8080;
app.listen(port, () => {
  console.log("http://localhost:"+port);
});
