import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App1 from "./App1";
import App2 from "./App2";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={App1} />
          <Route path="/app2" exact component={App2} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
