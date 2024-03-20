import React from "react"
import  ReactDOM  from "react-dom";
import Header from "./header";
import Body from "./body";

const AppLayout = () => {
  return (

  <div>
    <Header />
    <Body />
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
