
import React from "react"

class UserClass extends React.Component{     //React.Componet given by react

   constructor(props){
    super(props);
    // console.log(  this.props.name+ "child constructor");
     this.state = {
        data:{
          strMeal:"dslfs",
          strArea:"lsdfs",
          strCategory:"dfldsk",
          

        },
     }
   }

   async componentDidMount() {
     console.log( this.props.name+ "Child compontnent Did Mount")

    // API CALL
    const data = await fetch ( "https://api.freeapi.app/api/v1/public/meals?page=1&limit=10");
    const json = await data.json();


    this.setState({
      data: json.data,
    });
     console.log(json);
 
  };

componentDidUpdate(){
  console.log("component Did update")
}
componentWillUnmount(){
  console.log("component will unmount")
}
   

    render() {
    
      console.log( this.props.name+ "child render")
        //destructuring technique---------
   
      const { strMeal, strArea, strCategory } = this.state.data ;
      console.log(this.state.data);

        return(
        
            <div className="userCard">
               <h3>Name:{strMeal}</h3>
               <h3>Location:{strArea}</h3>
               <h3>Category:{strCategory}</h3>
            </div>
         
        )
    }
    
    
}



export default UserClass;