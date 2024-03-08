const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const cookie = require("cookie-parser");
const UserAuth = require("./Router/auth");
const RoomAuth = require("./Router/hotel");
mongoose.connect(
  "mongodb+srv://Laja:<password>@cluster0.y4q4b.mongodb.net/reserve"
);

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.post("/upload", (req, res) => {});
app.use(cookie());
app.use(express.json());
app.use("/auth", UserAuth);
app.use("/hotel", RoomAuth);
app.use(
  cors({
    origin: ["http://localhost:5173/", "http://exp://192.168.100.155:8081/"],
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);

app.listen(3002, () => {
  console.log("server is live bitch");
});
