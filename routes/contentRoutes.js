const express = require("express");
const { addVideo, addPlaylist } = require("../controllers/contentController");

const router = express.Router();

router.route("/addvideo").post(addVideo);
router.route("/addplaylist").post(addPlaylist);

module.exports = router;
