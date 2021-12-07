import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="header_d">
      <div className="logo_l">
        <h1>App Name</h1>
      </div>
      <div className="right">
        <div className="itemcontainer">Home</div>
        <div className="itemcontainer">Page A</div>
        <div className="itemcontainer">Page B</div>

        <div className="itemcontainer">Page C</div>
      </div>
    </div>
  );
}
