import React from 'react';
import "./App.css";
import {
  LineChart,Line,
    XAxis,
    YAxis, CartesianGrid} from 'recharts';


const App = () => {
//sample values to plot the chart

const data = [
  {
    "name": "Jan",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Feb",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "March",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "April",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "May",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "June",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "July",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]



return (
<div>
  <div>
  <LineChart width={500} height={300} data={data} id="one">
    <XAxis dataKey="name"/>
    <YAxis />
    <CartesianGrid stroke="#eee" strokeDasharray="9 9"/>
    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  </LineChart>
  </div>
  <div>
  <LineChart width={500} height={300} data={data} id="two">
    <XAxis dataKey="name"/>
    <YAxis />
    <CartesianGrid stroke="#eee" strokeDasharray="9 9"/>
    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  </LineChart>
  </div>
  </div>
);
}

export default App;

