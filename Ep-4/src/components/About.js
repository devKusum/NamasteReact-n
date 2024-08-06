import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{ 
  constructor(props){
    super(props);
    console.log("parent constructor");
  }

  componentDidMount(){
    console.log("parent compontnent Did Mount")
  }
  


  render() {
  console.log("parent render")

    return (
      <div>
        <h1 className="aboutTitle">About class component</h1>
        <div className="userCardContainer">
        <UserClass name={"first child"} location={"hyd"}/>
        <UserClass name={"second child"} location={"hyd"}/>
        <UserClass name={"third child"} location={"hyd"}/>
        <UserClass name={"fourth child"} location={"hyd"}/>
        <UserClass name={"fifth child"} location={"hyd"}/>
        </div>
      </div>
    )
  }


};

export default About;
