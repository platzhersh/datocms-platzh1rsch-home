import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./molecules/Header";
import Home from "./pages/Home";

const App = () => (
  <Router>
    <Header />
    <main>
      <Route exact path="/" component={Home} />
    </main>
  </Router>
);

export default App;
