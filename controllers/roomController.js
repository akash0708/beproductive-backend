const asyncHandler = require("express-async-handler");
const Room = require("../models/groupModel");
const User = require("../models/userModel");

const createRoom = asyncHandler(async (req, res) => {
  if (!req.body.userId || !req.body.roomName) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }
  // find user from db
  const user = await User.findOne({ _id: req.body.userId });
  // array te push users
  var users = [];
  users.push(user);

  try {
    const room = await Room.create({
      roomName: req.body.roomName,
      users: users,
    });

    const fullRoom = await Room.findOne({ _id: room._id }).populate(
      "users",
      "-password"
    );
    res.status(200).json(fullRoom);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const joinRoom = asyncHandler(async (req, res) => {
  if (!req.body.userId || !req.body.roomId) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }
  // find user from db
  const user = await User.findOne({ _id: req.body.userId });
  // find room from db
  const room = await Room.findOne({ _id: req.body.roomId });

  if (!room) {
    return res.status(400).json({ message: "Room not found" });
  }

  // push into the users array
  try {
    const updatedRoom = await Room.findOneAndUpdate(
      { _id: req.body.roomId },
      { $push: { users: user } },
      { new: true }
    ).populate("users", "-password");
    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

module.exports = { createRoom, joinRoom };
