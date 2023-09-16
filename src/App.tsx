import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="">
      <Navbar />
      <main>
        <Hero />
      </main>
      <section>
        <Gallery />
      </section>
    </div>
  );
}

export default App;
