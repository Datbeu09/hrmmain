// services/employeeService.js

const API_BASE_URL = "http://localhost:5000/api/employees";

/**
 * Lấy danh sách nhân viên
 */
export const getEmployees = async () => {
  try {
    const res = await fetch(API_BASE_URL);

    if (!res.ok) {
      throw new Error("Không thể tải danh sách nhân viên");
    }

    return await res.json();
  } catch (error) {
    console.error("getEmployees error:", error);
    throw error;
  }
};

/**
 * Lấy nhân viên theo ID
 * @param {number|string} id
 */
export const getEmployeeById = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/${id}`);

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error("Không thể tải thông tin nhân viên");
    }

    return await res.json();
  } catch (error) {
    console.error("getEmployeeById error:", error);
    throw error;
  }
};
