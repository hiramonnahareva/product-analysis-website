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
                {/* <ResponsiveContainer width={200} height="75%"> */}
            <LineChart width={300} height={250} data={data}>
             <Line dataKey='sell' />
             <XAxis dataKey='month'></XAxis>
             <YAxis dataKey='sell'></YAxis>
             <Tooltip />
            </LineChart>
            {/* </ResponsiveContainer> */}
            </div>
            <div className="revenue">
                <h3>Revenue VS Investment</h3>

                <AreaChart width={300} height={250} data={data}
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
          width={300}
          height={250}
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
          <Bar dataKey="investment" stackId="a" fill="#d24dff" />
          <Bar dataKey="revenue" stackId="a" fill="#f9e6ff" />
        </BarChart>
            </div>
            <div className="revenue">
            <h3>Revenue VS Investment</h3>
            <PieChart width={330} height={250}>
            <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d9" />
            <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
            </div>
            </div>
        </div>
    );
};

export default Dashbord;