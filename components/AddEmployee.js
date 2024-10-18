import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee } from '../store/actions';

import { addEmployee } from '../store/actions';

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    role: '',
    experience: '',
    salary: '',
    address: ''
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEmployee(formData));  
  };


  return (
    <form onSubmit={handleSubmit}>
     <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      <input type="number" name="age" value={formData.age} onChange={handleChange} required />
      <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
      <input type="text" name="role" value={formData.role} onChange={handleChange} required />
      <input type="number" name="experience" value={formData.experience} onChange={handleChange} required />
      <input type="number" name="salary" value={formData.salary} onChange={handleChange} required />
      <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployee;
