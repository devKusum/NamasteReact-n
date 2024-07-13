import React from "react";
import ReactDOM from "react-dom/client";

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




const Header = () =>{
    return (
        <header className="header" >
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
    )
}

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">
        <input className="searchInput" placeholder="enter name"/>
        <button className="search-btn">
          Ok
        </button>

      </div>
      <br/>
      <div className="rest-container">
           <div className="card">
               <div className="card-header">
                  <img  src="img/cup.jpg" alt="cup"  />
               </div>
               <div className="card-body">
                    <h4>Coffee</h4>

               </div>
               <div className="card-footer">
                    <h4>Rs/- 50</h4>

               </div>
           </div>
           <div className="card">
               <div className="card-header">
                  <img  src="img/cup.jpg" alt="cup"  />
               </div>
               <div className="card-body">
                    <h4>Coffee</h4>

               </div>
               <div className="card-footer">
                    <h4>Rs/- 50</h4>

               </div>
           </div>
           <div className="card">
               <div className="card-header">
                  <img  src="img/cup.jpg" alt="cup"  />
               </div>
               <div className="card-body">
                    <h4>Coffee</h4>

               </div>
               <div className="card-footer">
                    <h4>Rs/- 50</h4>

               </div>
           </div>
           <div className="card">
               <div className="card-header">
                  <img  src="img/cup.jpg" alt="cup"  />
               </div>
               <div className="card-body">
                    <h4>Coffee</h4>

               </div>
               <div className="card-footer">
                    <h4>Rs/- 50</h4>

               </div>
           </div>
           <div className="card">
               <div className="card-header">
                  <img  src="img/cup.jpg" alt="cup"  />
               </div>
               <div className="card-body">
                    <h4>Coffee</h4>

               </div>
               <div className="card-footer">
                    <h4>Rs/- 50</h4>

               </div>
           </div>
           <div className="card">
               <div className="card-header">
                  <img  src="img/cup.jpg" alt="cup"  />
               </div>
               <div className="card-body">
                    <h4>Coffee</h4>

               </div>
               <div className="card-footer">
                    <h4>Rs/- 50</h4>

               </div>
           </div>
      </div>

    </div>
  )
}


const Footer = () =>{
  return (
    <div className="footer">
      
       <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
   
    </div>
  )
}

const AppLayout = () => {
    return (
        <div className="app">
          <Header/>
          <Body/>
          <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
