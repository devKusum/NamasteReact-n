
import React from "react"

class UserClass extends React.Component{     //React.Componet given by react

   constructor(props){
    super(props);
    console.log(  this.props.name+ "child constructor");
     this.state = {
       count:0,
      
     }
   }

   componentDidMount(){
    console.log( this.props.name+ "Child compontnent Did Mount")
  }


    render() {
    
     console.log( this.props.name+ "child render")
        //destructuring technique---------
        const {name, location} = this.props; 
        const {count} = this.state; 
        return(
        
            <div className="userCard">
             <h5>count:{count}</h5>
              <button onClick={
              () => {
                this.setState({
                    count:this.state.count + 1,
                });
              }
              }
            >
            Count increase
                </button>
               <h3>Name:{name}</h3>
               <span>Locatio:{location}</span>
               <h3>Post:Web Developer</h3>
               <span>Mo : 9340114179</span>
              
          
            </div>
         
        )
    }
    
    
}



export default UserClass;