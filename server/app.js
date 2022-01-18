require("dotenv").config();
require("./models");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");

const app = express();

//# middleware
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

//# express-session
const session = require("express-session");

app.use(
  session({
    secret: "numberCode secret",
    resave: false,
    saveUninitialized: false,
  })
);

//# routes
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

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

const server = app.listen(process.env.PORT || 5050, () => {
  console.log(`listening port ${process.env.PORT || 5050}/ env=${process.env.NODE_ENV}`);
});
