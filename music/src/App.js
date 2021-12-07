import React from "react";
import "./App.css";
import AreaGraph from "./Components/AreaGraph";
import BarGraph from "./Components/BarGraph";
import LineGraph from "./Components/LineGraph";
import Header from "./Header/Header"

export default function App(){
  return( <div>
    <Header/>
    <br/>
    <LineGraph/>
    <AreaGraph/>
    <BarGraph/>
  </div>
  );
};

