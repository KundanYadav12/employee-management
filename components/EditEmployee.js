

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee } from '../store/actions'; // Corrected import
import { useParams } from 'react-router-dom';
import './EditEmployee.css';

const EditEmployee = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);
  const employee = employees.find((emp) => emp.id === parseInt(id));

  const [formData, setFormData] = useState({ ...employee });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEmployee(id, formData));  
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="role"
        value={formData.role}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <button type="submit">Update Employee</button>
    </form>
  );
};

export default EditEmployee;
