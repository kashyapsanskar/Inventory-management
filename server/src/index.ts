import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dashboardRoutes from "./routes/dashboardRoutes";   

// Route Imports
//  Configurations
dotenv.config();
const app =express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));   
app.use(cors());


// ROUTES
// app.get("/hello",(req,res)=>{
//     res.send("hello world");
// });
app.use("/dashboard",dashboardRoutes); //http://localhost:800
const port =process.env.PORT|| 3001;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);

});