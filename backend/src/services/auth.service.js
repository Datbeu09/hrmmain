const ApiError = require("../utils/ApiError");
const accountsRepo = require("../repositories/accounts.repo");
const passwordUtil = require("../utils/password");
const jwtUtil = require("../utils/jwt");

async function login({ username, password }) {
  const acc = await accountsRepo.findByUsername(username);
  if (!acc) throw new ApiError(401, "Invalid username or password");
  if (acc.status !== "ACTIVE") throw new ApiError(403, "Account is not active");

  const ok = await passwordUtil.compare(password, acc.password);
  if (!ok) throw new ApiError(401, "Invalid username or password");

  const payload = {
    accountId: acc.id,
    username: acc.username,
    role: acc.role,
    employeeId: acc.employeeId || null,
  };

  return { accessToken: jwtUtil.sign(payload), account: payload };
}

module.exports = { login };
