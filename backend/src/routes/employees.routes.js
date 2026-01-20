const express = require("express");
const router = express.Router();

const c = require("../controllers/employees.controller");

// CRUD
router.get("/", c.listEmployees);        // GET /api/employees
router.get("/:id", c.getEmployeeById);   // GET /api/employees/:id
router.post("/", c.createEmployee);      // POST /api/employees
router.put("/:id", c.updateEmployee);    // PUT /api/employees/:id
router.delete("/:id", c.deleteEmployee); // DELETE /api/employees/:id

module.exports = router;
