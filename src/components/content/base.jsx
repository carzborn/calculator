import React, { Component } from "react";

class Base extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="card" style={{ marginTop: "30px", marginBottom: "100px", paddingLeft: "25px", paddingRight: "25px" }}>
          <div className="card-body">
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Base;
