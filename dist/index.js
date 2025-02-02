"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const dbConnect_1 = require("./lib/dbConnect");
const compilerRouter_1 = require("./routes/compilerRouter");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(cookieParser());
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["https://livecodepaint.netlify.app"],
}));
(0, dotenv_1.config)();
app.use("/compiler", compilerRouter_1.compilerRouter);
(0, dbConnect_1.dbConnect)();
const port=process.env.PORT | 8080;
app.listen(port, () => {
    console.log("http://localhost:"+port);
});
