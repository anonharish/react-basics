import React from "react";
import User from "./user";
import UserClass from "./UserClass";


class About extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
          <div>
            <h1>This is my About Us Page</h1>
            <User />
            <UserClass
              name={"this is from (class)"}
              location={"this is from hyderbad"}
            />
          </div>
        );
    }
}

export default About;