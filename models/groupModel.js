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
  videos: [{ type: String, trim: true }],
});

const Room = mongoose.model("Room", roomModel);

module.exports = Room;
