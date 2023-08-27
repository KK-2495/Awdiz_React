import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import router from "./Routes/router.js";
import cors from "cors";
import dotvenv from "dotenv";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
dotvenv.config();
app.use('/api/v1',router);

mongoose.connect(process.env.mongoDB)
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err, "err"));

app.listen(process.env.port);

