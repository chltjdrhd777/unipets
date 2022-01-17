const express = require("express");
const router = express.Router();
const { signUp, signIn, signOut, oauthSignUp, mailAuth } = require("../controllers/auth");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signout", signOut);
router.get("/mail", mailAuth);

//# Oauth
router.post("/oauth", oauthSignUp);

module.exports = router;
