import React from "react";
import Home from "./pages/Home";
import Resume from "./pages/Resume"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";

function App() {
    return (
      <Router>
          <div>
            <Header />
            <NavTabs />
            <Route exact path="/" component={Home} />
            <Route exact path="/resume"  component={Resume} />
            <Footer />
          </div>
      </Router>
    )
}

export default App;