require("dotenv").config();
const express = require("express");

const employeesRoutes = require("./routes/employees.routes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

// health check
app.get("/health", (req, res) => res.json({ ok: true }));

// routes
app.use("/api/employees", employeesRoutes);

// 404 + error handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;
