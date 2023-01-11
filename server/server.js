// package imports
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

// -----other imports
const { PORT } = require("./config/env");

app.use(express.static("public"));
connectDB();
// Template Engine
app.set("views", path.join(`${__dirname}`, "/views"));
app.set("view engine", "ejs");
// Routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
