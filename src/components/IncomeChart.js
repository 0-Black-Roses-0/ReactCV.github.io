import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', income: 5000 },
  { name: 'Feb', income: 4500 },
  { name: 'Mar', income: 3000 },
  { name: 'Apr', income: 4000 },
  { name: 'May', income: 3200 },
  { name: 'Jun', income: 4100 },
  { name: 'Jul', income: 4900 },
];

const IncomeChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="income" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default IncomeChart;
