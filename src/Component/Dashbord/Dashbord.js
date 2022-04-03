import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashbord.css'

const Dashbord = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 105000
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 400100
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 250000
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 509000
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 610000
        }
    ]
    return (
        <div>
            <h2>Dashbord</h2>
            <div className="chart-container">
            <div className="revenue">
                <h3>Show sell</h3>
            <LineChart width={560} height={400} data={data}>
             <Line dataKey='sell' />
             <XAxis dataKey='month'></XAxis>
             <YAxis dataKey='sell'></YAxis>
             <Tooltip />
            </LineChart>
            </div>
            <div className="revenue">
                <h3>Revenue VS Investment</h3>
                <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
            </div>
            <div className="revenue">
            <h3>Revenue VS Investment</h3>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        </BarChart>
            </div>

            </div>
        </div>
    );
};

export default Dashbord;