 


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import EmployeeList from './components/EmployeeList';  
import { Provider } from 'react-redux';
import store from './store/store';  
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header >
            <h1>Employee Management System</h1>
          </header>
          <Routes>           
            <Route path="/dashboard" element={<Dashboard />} />          
            <Route path="/add-employee" element={<AddEmployee />} />         
            <Route path="/edit-employee/:id" element={<EditEmployee />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

