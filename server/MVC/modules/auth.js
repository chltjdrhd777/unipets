const express = require("express");
const router = express.Router();
const { signUp, signIn, signOut } = require("../controllers/auth");
const app = require("../../app");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signout", signOut);

app.use("/auth", router);
