const mongoose = require("mongoose");

const roomModel = mongoose.Schema({
  roomName: {
    type: String,
    trim: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  videosId: [{ type: String, trim: true }],
  playlistId: [{ type: String, trim: true }],
});

const Room = mongoose.model("Room", roomModel);

module.exports = Room;
