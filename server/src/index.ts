import express from "express"
import {Request, Response} from 'express'
import cors from 'cors';
import { authRouter } from "./routes/authRoute";
import "dotenv/config";
const app = express()
const port = 3000
app.use(cors())
app.use(express.json());
app.use('/',authRouter)
app.get("/", (req:Request,res:Response) => {
    res.send("Hello wotld")
})

app.listen(port, () => {
  console.log(`TypeScript with Express 
         http://localhost:${port}/`);
});