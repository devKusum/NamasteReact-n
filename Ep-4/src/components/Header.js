
import { useState } from "react";


const Header = () => {

  const [loginbtnReact, setloginbtnReact] = useState("login") //toggling btn


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
      <button className="button" onClick={() => {
        loginbtnReact === "login" ? setloginbtnReact("logout") : setloginbtnReact("login");
      }}
      >
        {loginbtnReact}
      </button>
    </header>
  );
};
export default Header;