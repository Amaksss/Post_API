const express = require("express");
const userController = require("../controllers/user.controller.js");
const authMiddleware = require("../Middleware/auth.middleware.js");

const userRoute = express.Router();
userRoute.post("/register", userController.registerUser);
userRoute.post("/login", userController.loginUser);
userRoute.get("/posts", authMiddleware, userController.getPosts);
module.exports = userRoute;