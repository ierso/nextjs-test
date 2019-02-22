import React, { Component } from "react";
import Header from "../components/header";

class FullPage extends Component {
  componentDidMount() {
    console.log("mounted");
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.children}
      </React.Fragment>
    );
  }
}
export default FullPage;
