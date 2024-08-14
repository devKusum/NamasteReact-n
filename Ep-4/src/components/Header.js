
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [loginbtnReact, setloginbtnReact] = useState("login"); //toggling btn


  // if there is no [dependency array] , useEffect will call on every render.
  // if there is  [empty dependency array] ,  useEffect will call after initial render (just once).
  // if there is  [something inside dependency array] ,  useEffect will call when the dependency changes like = [loginbtnReact] .

  // console.log("Initially " + (window.navigator.onLine ? "on" : "off") + "line");
  const onlineStatus = useOnlineStatus();
  // console.log(onlineStatus);
  // if (onlineStatus === true) {
  //   alert("your are online ");
  // } else {
  //   alert("your are offline ");
  // }

  return (
    <header className=" flex">
      <div className="logo-conatainer ">
        <h1>
          <Link to="/"> KFC </Link>
        </h1>
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
         <li>
           <Link to = "/grocery">Grocery</Link>
        </li>
          <li>Cart</li>
        
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
        </ul>
      </nav>
   
      <button className="button" onClick={() => {
        loginbtnReact === "login" ? setloginbtnReact("logout") : setloginbtnReact("login");
      }}>login</button>

       
   
    </header>
  );
};
export default Header;
