
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, deleteEmployee } from '../store/actions';
import { removeEmployee } from '../store/actions';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees || []);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

 
  return (
    <div>
      <input type="text" placeholder="Search Employee..." />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((emp) => (
              emp && emp.firstName ? ( // Check if employee and firstName exist
                <tr key={emp.id}>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.role}</td>
                  <td>
                    <Link to={`/edit-employee/${emp.id}`}>Edit</Link>
                    <button onClick={() => dispatch(removeEmployee(emp.id))}>Delete</button>
                  </td>
                </tr>
              ) : (
                <tr key={emp.id}>
                  <td colSpan="4">Invalid employee data</td>
                </tr>
              )
            ))
          ) : (
            <tr>
              <td colSpan="4">No employees found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
