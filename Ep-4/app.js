import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./mockData.js";

//=======================Food ordering app ======================
//layout design
//Header
//-logo
//-navItems
//Body
//-serch
//-rest-container
//Footer
//-copyright
//-  Contact links

const Header = () => {
  return (
    <header className="header">
      <div className="logo-conatainer">
        <h1>KFC</h1>
      </div>
      <nav className="nav-Items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

const Restcard = (resList) => {
  // console.log(resList);
  // /  destructuring of code---- if it is destructuring then no need to write like-- resList.resName etc
  const { strMeal, strMealThumb, strArea } = resList.restList;
  return (
    <div className="card">
      <div className="card-header">
        <img
          className="res-logo"
          src={strMealThumb}
          alt="cup"
        />
      </div>
      <div className="card-body">
        <h4>{strArea}</h4>
        <h4>{strMeal}</h4>
      </div>
      <div className="card-footer">
        <h4>Rs/- 50</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">
        <input
          className="searchInput"
          placeholder="enter name"
        />
        <button className="search-btn">Ok</button>
      </div>
      <br />
      <div className="rest-container">
        {resList.map((item) => {
          return (
            <Restcard
              key={item.id}
              restList={item}
            />
          );
        })}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
