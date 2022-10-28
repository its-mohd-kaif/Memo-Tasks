import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "Kaif"};
      }
  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({name:"Mohd Kaif"})
  //     console.log(this.state.name)
  //   }, 2000);
  // }

  render() {
    return (
      <>
        <div>ParentComponent</div>
        <ChildComponent />
        <hr></hr>
      </>
    );
  }
}

export default ParentComponent;
