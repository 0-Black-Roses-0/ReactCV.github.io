import React from 'react';
import ExpenseChart from './ExpenseChart';
import IncomeChart from './IncomeChart';
import EmployeeCount from './EmployeeCount';
import CustomerCount from './CustomerCount';
import ProductCount from './ProductCount';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="charts">
        <div className="card">
          <ExpenseChart />
        </div>
        <div className="card">
          <IncomeChart />
        </div>
      </div>
      <div className="counts">
        <div className="card">
          <EmployeeCount />
        </div>
        <div className="card">
          <CustomerCount />
        </div>
        <div className="card">
          <ProductCount />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
