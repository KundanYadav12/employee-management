 
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../store/actions';
import EmployeeList from './EmployeeList';  
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {

    const dispatch = useDispatch();
    const employees = useSelector(state => state.employees);
  
    useEffect(() => {
      dispatch(fetchEmployees());
    }, [dispatch]);

    
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Employee Manager</h2>
        <nav>
          <ul>
            <li><Link to="/add-employee">Add Employee</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
      </aside>

      <div className="main-content">
        <header className="top-bar">
          <h1>Employee Dashboard</h1>
        </header>

        <section className="employee-list">
          <h2>Employee List</h2>
          <EmployeeList />  
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
