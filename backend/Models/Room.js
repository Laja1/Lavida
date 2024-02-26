const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  coverimage: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
});

const RoomModel = mongoose.model("rooms", RoomSchema);
module.exports = RoomModel;
