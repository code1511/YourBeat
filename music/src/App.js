import React from 'react';
import { BarChart, Bar, Brush, XAxis,

    YAxis, CartesianGrid} from 'recharts';


const App = () => {
//sample values to plot the chart
const data = [

  {name:'A', x:861},

  {name:'B', x:862},

  {name:'C', x:343},

  {name:'D', x:454},

  {name:'E', x:435},

  {name:'F', x:653},

  {name:'G', x:734},

  {name:'H', x:845},

  {name:'I', x:932},

  {name:'J', x:133},

  {name:'K', x:222},

  {name:'L', x:332},

  {name:'M', x:554},

  {name:'N', x:554},

  {name:'O', x:633},

  {name:'P', x:722},

  {name:'Q', x:638},

  {name:'R', x:229},

  {name:'S', x:321},

  {name:'T', x:222},

  {name:'U', x:573},

  {name:'V', x:464},

  {name:'W', x:565},

  {name:'X', x:656},

  {name:'Y', x:764},

  {name:'Z', x:348},
];


return (

  <BarChart width={500} height={600} data={data} >

      <CartesianGrid/>

      <XAxis dataKey="name" />

      <YAxis />

      <Brush dataKey="name" height={30} stroke="#f21127" />

      <Bar dataKey="x" fill="green" />

  </BarChart>
);
}

export default App;

