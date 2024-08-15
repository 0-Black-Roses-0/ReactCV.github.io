import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', expense: 4000 },
  { name: 'Feb', expense: 3000 },
  { name: 'Mar', expense: 2000 },
  { name: 'Apr', expense: 2780 },
  { name: 'May', expense: 1890 },
  { name: 'Jun', expense: 2390 },
  { name: 'Jul', expense: 3490 },
  { name: 'ha', expense: 2341 },
];

const ExpenseChart = () => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `$${value}`} />
        <Tooltip formatter={(value) => `$${value}`} />
        <Legend />
        <Bar dataKey="expense" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExpenseChart;
