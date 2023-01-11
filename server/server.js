// package imports
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();

// -----other imports
const { PORT } = require("./config/env");

connectDB();

// Routes
app.use("/api/files", require("./routes/files"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
