import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import router from "./Routes/router.js";
import cors from "cors";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/api/v1',router);

mongoose.connect('mongodb+srv://Krish24:Krish%402495@cluster0.s8xz5ha.mongodb.net/FrontendDB?retryWrites=true&w=majority')
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err, "err"));

app.listen(8000);