
import React from "react"

class UserClass extends React.Component{     //React.Componet given by react

   constructor(props){
    super(props);

     this.state = {
        Name :"useState in classs component",
        Name2 :"useState in classs component",
     }

   }
    render() {
    

        //destructuring technique---------
        const {name, location} = this.props; 
        const {Name, Name2} = this.state; 
        return(
            <div className="userCard">
             <h5>name:{Name}</h5>
             <h5>name:{Name2}</h5>
               <h3>Name:{name}</h3>
               <span>Locatio:{location}</span>
               <h3>Post:Web Developer</h3>
               <span>Mo : 9340114179</span>
              
          
            </div>
        )
    }
    
    
}



export default UserClass;