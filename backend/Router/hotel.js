const express = require("express");
const router = express.Router();
const RoomModel = require("../Models/Room");

router.post("/create", (req, res) => {
  const name = req.body.name;
  const coverimage = req.body.coverimage;
  const title = req.body.title;
  const image = req.body.image;
  const email = req.body.email;
  const price = req.body.price;
  const phoneNumber = req.body.phoneNumber;
  // const userId = req.body.userId;
  try {
    RoomModel.create({
      name: name,
      email: email,
      coverimage: coverimage,
      image: image,
      title: title,
      price: price,
      phoneNumber: phoneNumber,
    });
    return res.json({ message: "reserve succesffuly created" });
  } catch (err) {
    console.error(err); // Log the error
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/booked", async (req, res) => {
  try {
    const hotel = await RoomModel.find();
    return res.json({ hotel, message: "hotel successfully retrieved" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// router.get("/rooms/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const room = await RoomModel.findById({ _id: id });
//     if (!room) {
//       return res.status(404).json({ message: "Room not found" });
//     }
//     return res.json({ room, message: "Room successfully retrieved" });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// });

module.exports = router;
