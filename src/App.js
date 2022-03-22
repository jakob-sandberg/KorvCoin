import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import "./style/About.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <div id="aboutSection" className="contract-box">
        <h1>Contract adress:</h1>
        <h1>0xfd47bbbb2c3d18645054676f954ae98d36c8fcb8</h1>
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
