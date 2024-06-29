const asyncHandler = require("express-async-handler");
const Room = require("../models/groupModel");

const addVideo = asyncHandler(async (req, res) => {
  if (!req.body.roomId || !req.body.videoId) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  // find room from db
  const room = await Room.findOne({ _id: req.body.roomId });
  if (!room) {
    return res.status(400).json({ message: "Room not found" });
  }

  // push into the videoId array
  try {
    const updatedRoom = await Room.findOneAndUpdate(
      { _id: req.body.roomId },
      { $push: { videosId: req.body.videoId } },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const addPlaylist = asyncHandler(async (req, res) => {
  if (!req.body.roomId || !req.body.playlistId) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  // find room from db
  const room = await Room.findOne({ _id: req.body.roomId });
  if (!room) {
    return res.status(400).json({ message: "Room not found" });
  }

  // push into the playlistId array
  try {
    const updatedRoom = await Room.findOneAndUpdate(
      { _id: req.body.roomId },
      { $push: { playlistId: req.body.playlistId } },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

module.exports = { addVideo, addPlaylist };
