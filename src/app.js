const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRoutes = require("./routes/authRoutes");
const recordRoutes = require("./routes/recordRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Finance Dashboard API running");
});

app.use("/api/auth", authRoutes);
app.use("/api/records", recordRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error"
  });
});
module.exports = app;