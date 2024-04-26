import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  newUser,
} from "../controllers/user.js";
import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

// route - user/new
app.post("/new", newUser);


// route - user/all
app.get("/all",adminOnly,getAllUsers);

// route - user/dynamicID
app.route("/:id").get(getUser).delete(adminOnly,deleteUser);

export default app;
