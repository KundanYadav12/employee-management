

import axios from 'axios';

const API_URL = 'http://localhost:5000/employees';

// Fetch all employees
export const getEmployees = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;   
  } catch (error) {
    console.error('Error fetching employees:', error);
    return [];
  }
};

// Add a new employee
export const addEmployee = async (employee) => {
  try {
    const response = await axios.post(API_URL, employee);
    return response.data;   
  } catch (error) {
    console.error('Error adding employee:', error);
    return null;
  }
};

// Edit an employee
export const updateEmployee = async (id, updatedEmployee) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedEmployee);
    return response.data;   
  } catch (error) {
    console.error(`Error updating employee with id ${id}:`, error);
    return null;
  }
};

// Delete an employee
export const deleteEmployee = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting employee with id ${id}:`, error);
  }
};
