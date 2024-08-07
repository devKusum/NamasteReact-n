import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{ 
  constructor(props){
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount(){
    // console.log("parent compontnent Did Mount")
  }
  


  render() {
  // console.log("parent render")

    return (
      <div>
        <h1 className="aboutTitle">About class component</h1>
        <div className="userCardContainer">
        <UserClass name={"first child"} location={"hyd"}/>
     
        </div>
      </div>
    )
  }


};

export default About;
