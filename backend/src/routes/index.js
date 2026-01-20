const router = require("express").Router();
const { pool } = require("../config/db");

router.get("/db/ping", async (req, res) => {
  const [rows] = await pool.query("SELECT NOW() AS now, DATABASE() AS db");
  res.json({ success: true, message: "DB OK", data: rows[0] });
});

router.use("/auth", require("./auth.routes"));
router.use("/", require("./crud.routes"));
router.use("/views", require("./views.routes"));

module.exports = router;
