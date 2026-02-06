import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Footer />
    </React.Fragment>
  );
}

export default App;
