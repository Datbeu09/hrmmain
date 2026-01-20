const router = require("express").Router();
const validate = require("../middlewares/validate.middleware");
const { loginSchema } = require("../validators/auth.validator");
const c = require("../controllers/auth.controller");

router.post("/login", validate(loginSchema), c.login);

module.exports = router;
