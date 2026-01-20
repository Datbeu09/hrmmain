const asyncHandler = require("../utils/asyncHandler");
const { ok } = require("../utils/response");
const authService = require("../services/auth.service");

const login = asyncHandler(async (req, res) => {
  const data = await authService.login(req.validated.body);
  return ok(res, data, "LOGIN_SUCCESS");
});

module.exports = { login };
