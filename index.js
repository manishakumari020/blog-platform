require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const authRoutes = require("./routes/userRoute");
const postRoutes = require("./routes/postRoute");
const commentRoute = require("./routes/commentRoute")

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/user", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/posts", commentRoute);

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB", err));

app.get("/", (req, res) => {
    res.send("Backend server is running");
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
