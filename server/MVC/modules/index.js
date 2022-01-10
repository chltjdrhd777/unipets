const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = require("../../app");
const express = require("express");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
  })
);

app.get("/", (_, res) => {
  res.send("hellow world");
});

app.use((_, res) => {
  res.status(404).json({
    data: null,
    message: "endpoint not found",
  });
});

app.use((err, _, res) => {
  console.log(err.stack);
  res.status(500).json({
    data: null,
    message: "something wrong",
  });
});
