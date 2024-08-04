
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {

  const [loginbtnReact, setloginbtnReact] = useState("login") //toggling btn




  // if there is no [dependency array] , useEffect will call on every render.
  // if there is  [empty dependency array] ,  useEffect will call after initial render (just once).
  // if there is  [something inside dependency array] ,  useEffect will call when the dependency changes like = [loginbtnReact] .

  useEffect(() => {
    console.log('useEffect called')
  }, [])
  
  return (
    <header className="header">
      <div className="logo-conatainer">
        <h1> <Link to='/'> KFC </Link> </h1>
      </div>
      <nav className="nav-Items">
        <ul>

          <li>
          <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/about">About</Link>
            </li>
          <li>
            <Link to = "/contact">Contact</Link>
            </li>
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