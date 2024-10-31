"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const authRoute_1 = require("./routes/authRoute");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/', authRoute_1.authRouter);
app.get("/", (req, res) => {
    res.send("Hello wotld");
});
app.listen(port, () => {
    console.log(`TypeScript with Express 
         http://localhost:${port}/`);
});
