const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const roomRoutes = require("./routes/roomRoutes");
const contentRoutes = require("./routes/contentRoutes");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/user", userRoutes);
app.use("/api/room", roomRoutes);
app.use("/api/content", contentRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
