const express = require("express");
const router = express.Router();
const { signUp, signIn, signOut, kakaoOauth } = require("../controllers/auth");
const app = require("../../app");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signout", signOut);

//# kakao
router.get("/naver", kakaoOauth);

app.use("/auth", router);
