/** @returns the employee created according to the provided details */
import db from "#db/client";
export async function createEmployee({ name, birthday, salary }) {

  const sql = `
  INSERT INTO employees (name, birthday, salary)
  VALUES ($1, $2, $3)
  RETURNING *;
`;
  // TODO
  const {rows: [employee]} = await db.query(sql, [name, birthday, salary]);
  return employee;
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  const sql = `
  SELECT * FROM employees
  `;

  const { rows: employees } = await db.query(sql);
  return employees;
  // TODO
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  const sql = `
  SELECT * FROM employees WHERE id = ${id}
  `;

  const {rows: employee} = await db.query(sql);
  return employee;
  // TODO
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
}
