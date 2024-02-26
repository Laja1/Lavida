// const express = require("express");
// const router = express.Router();
// const UserModel = require("../Models/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// router.post("/signup", async (req, res) => {
//   try {
//     const email = req.body.email;
//     const password = req.body.password; // Corrected the variable name
//     const user = await UserModel.findOne({ email });

//     if (user) {
//       return res.json({ message: "User already exists" });
//     } else {
//       const hashpassword = await bcrypt.hash(password, 10);
//       const newuser = new UserModel({ email, password: hashpassword });
//       await newuser.save();
//       return res.json({ message: "User registered successfully" });
//     }
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: "Server is crashed" });
//   }
// });
// router.post("/login", async (req, res) => {
//   try {
//     const email = req.body.email;
//     const password = req.body.password;
//     const user = await UserModel.findOne({ email });
//     if (!user) {
//       return res.json({ message: "User doesnt exists" });
//     } else {
//       const validPassword = await bcrypt.compare(password, user.password); // Corrected placement of the comma
//       if (!validPassword) {
//         return res.json({ message: "Wrong credentials" });
//       } else {
//         const token = jwt.sign({ id: user._id }, "secret");
//         res.cookie("token", token);
//         return res.json({
//           message: "Successfully logged in",
//           id: user._id,
//           email,
//         });
//       }
//     }
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: "Server is crashed" });
//   }
// });
// router.get("/logout", async (req, res) => {
//   try {
//     res.clearCookie("token");

//     // Assuming you are using a method or library to delete the storage directory
//     // Replace `storageDirectory` with the actual path of the directory to delete
//     // For example, if you're using fs-extra:
//     // await fse.remove(storageDirectory);

//     res.status(200).json({ message: "Successfully logged out" });
//   } catch (error) {
//     console.error("Failed to delete storage directory:", error);
//     res.status(500).json({ message: "Failed to log out" });
//   }
// });

const express = require("express");
const UserModel = require("../Models/User");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const phoneNumber = req.body.phoneNumber;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.json({ message: "User already exists" });
    } else {
      const hashpassword = bcrypt.hashSync(password, 10);
      const newUser = await UserModel.create({
        email,
        phoneNumber,
        name,
        password: hashpassword, // Corrected field name
      });
      // You should not return newUser here
      return res.json({ message: "User registered successfully" });
    }
  } catch (error) {
    // Added error variable to catch block
    console.log(error); // Log the error for debugging
    return res.json({ message: "An error occurred while registering user" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User doesn't exist" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Wrong credentials" });
    }

    const token = jwt.sign({ id: user._id }, "secret");
    res.cookie("token", token);
    return res.json({
      message: "Successfully logged in",
      id: user._id,
      email,
      name: user.name,
    });
  } catch (error) {
    console.error("Error logging in:", error.message);
    return res
      .status(500)
      .json({ message: "An unexpected error occurred. Please try again." });
  }
});

router.get("/logout", async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Successfully logged out" });
  } catch (error) {
    console.error("Failed to delete storage directory:", error);
    res.status(500).json({ message: "Failed to log out" });
  }
});

module.exports = router;
