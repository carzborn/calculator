import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Calculator from "./components/content/calculator"

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
