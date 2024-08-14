import React from 'react';

const EmployeeCount = () => {
  const employeeCount = 150; 

  return (
    <div className="count-box">
      <h2>Total Employees</h2>
      <p>{employeeCount}</p>
    </div>
  );
};

export default EmployeeCount;
