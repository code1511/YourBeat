import React from 'react';
import { LineChart,Line,
  //  BarChart, Bar, Brush,
    XAxis,

    YAxis, CartesianGrid} from 'recharts';


const App = () => {
//sample values to plot the chart

const data = [{name: 'SC1', uv: 300, pv: 2490, amt: 400},
              {name: 'SC2', uv: 800, pv: 1810, amt: 1100},
              {name: 'SC3', uv: 410, pv: 2500, amt: 2400},
              {name: 'SC4', uv: 500, pv: 2390, amt: 400},
              {name: 'SC5', uv: 2500, pv: 1810, amt: 1100},
              {name: 'SC6', uv: 410, pv: 700, amt: 2400},
              {name: 'SC7', uv: 2300, pv: 490, amt: 400},
              {name: 'SC8', uv: 800, pv: 1810, amt: 1100},
              {name: 'SC9', uv: 410, pv: 700, amt: 2400},
              {name: 'SC10', uv: 300, pv: 2490, amt: 400},
              {name: 'SC11', uv: 800, pv: 1810, amt: 1100},
              {name: 'SC12', uv: 410, pv: 2500, amt: 2400},

            ];


return (

  <LineChart width={800} height={500} data={data}
  margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <XAxis dataKey="name"/>
    <YAxis />
    <CartesianGrid stroke="#eee" strokeDasharray="9 9"/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
  </LineChart>
);
}

export default App;

