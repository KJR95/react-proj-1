import React from "react";
import "./App.css";

import {
  Footer,
  Header,
  Possibility,
  Features,
  Blog,
  whatGPT3,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <whatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
