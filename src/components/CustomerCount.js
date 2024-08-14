import React from 'react';

const CustomerCount = () => {
  const customerCount = 300; 

  return (
    <div className="count-box">
      <h2>Total Customers</h2>
      <p>{customerCount}</p>
    </div>
  );
};

export default CustomerCount;
