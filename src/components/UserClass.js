import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

  render() {
    return (
      <div className="user-card">
        <h1>count:{this.state.count}</h1>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>Increment</button>
        <p>User Name: {this.props.name}</p>
        <p>No of Commits: 982</p>
        <p>last commit : 2 days ago</p>
        <p>location: {this.props.location}</p>
      </div>
    );
  }
}

export default UserClass;
