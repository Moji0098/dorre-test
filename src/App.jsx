import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
