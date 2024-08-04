
import React from "react"

class UserClass extends React.Component{     //React.Componet given by react

   constructor(props){
    super(props);
   }
  


    render() {
    

        //destructuring technique---------
        const {name, location} = this.props; 




        return(
            <div className="userCard">
             
               <h3>Name:{name}</h3>
               <span>Locatio:{location}</span>
               <h3>Post:Web Developer</h3>
               <span>Mo : 9340114179</span>
              
          
            </div>
        )
    }
    
    
}



export default UserClass;