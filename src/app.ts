import express from "express";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";

// Importing Routes 

import userRoute from  "./routes/user.js";
import productRoute from "./routes/product.js";

const port = 4000; 

connectDB()

const app = express();

app.use(express.json()); 


app.get("/",(req,res) =>{
      res.send({message: "GETT"})
})



// Using Routes 
app.use("/user",userRoute)
app.use("/product",productRoute)

app.use(errorMiddleware); 

app.listen(port, () =>{

    console.log(`Server is working on http://localhost:${port}`)
})
