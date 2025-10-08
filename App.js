import React from "react";
import ReactDOM from "react-dom/client";
// import "./asset/"

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="./asset/smoking-burger-with-lettuce-3624ld.png"></img>
      </div>
      <div className="nav">
        <ul className="nav-items">
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
