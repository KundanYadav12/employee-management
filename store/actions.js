 
import { addEmployee, deleteEmployee, getEmployees, updateEmployee as updateEmployeeService } from '../services/EmployeeService';

// Creating the action for updating employee
export const updateEmployee = (id, updatedEmployee) => async (dispatch) => {
  try {
    const employee = await updateEmployeeService(id, updatedEmployee); // Use the updateEmployee service here
    dispatch({ type: 'UPDATE_EMPLOYEE_SUCCESS', payload: employee });
  } catch (error) {
    console.error('Error updating employee:', error);
  }
};

export const createEmployee = (employee) => async (dispatch) => {
  try {
    const newEmployee = await addEmployee(employee);  
    if (newEmployee && newEmployee.firstName) {
    dispatch({ type: 'ADD_EMPLOYEE_SUCCESS', payload: newEmployee });  
  } else {
    console.error('Invalid employee data');
  }
  } catch (error) {
    console.error('Error adding employee:', error);
  }
};

export const removeEmployee = (id) => async (dispatch) => {
  await deleteEmployee(id);
  dispatch({ type: 'REMOVE_EMPLOYEE', payload: id });
};

export const fetchEmployees = () => async (dispatch) => {
  const employees = await getEmployees();
  dispatch({ type: 'FETCH_EMPLOYEES', payload: employees });
};
