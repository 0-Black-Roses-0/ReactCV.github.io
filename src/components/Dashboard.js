import React from 'react';
import ExpenseChart from './ExpenseChart';
import IncomeChart from './IncomeChart';
import EmployeeCount from './EmployeeCount';
import CustomerCount from './CustomerCount';
import ProductCount from './ProductCount';
import styles from './style/Dashboard.module.css';


const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.dashboardTitle}>Admin Dashboard</h1>
      <div className={styles.charts}>
        <div className={styles.card}>
          <ExpenseChart />
        </div>
        <div className={styles.card}>
          <IncomeChart />
        </div>
      </div>
      <div className={styles.counts}>
        <div className={styles.card}>
          <EmployeeCount />
        </div>
        <div className={styles.card}>
          <CustomerCount />
        </div>
        <div className={styles.card}>
          <ProductCount />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;