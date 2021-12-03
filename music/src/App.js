import React from 'react';
import { LineChart,Line,
  //  BarChart, Bar, Brush,
    XAxis,

    YAxis, CartesianGrid} from 'recharts';


const App = () => {
//sample values to plot the chart

const data = [{name: 'Page A', uv: 400, pv: 2490, amt: 2400},
              {name: 'Page B', uv: 380, pv: 2310, amt: 2400},
              {name: 'Page C', uv: 410, pv: 2100, amt: 2400}];


return (

  <LineChart width={500} height={300} data={data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
  </LineChart>
);
}

export default App;

