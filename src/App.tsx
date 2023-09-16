import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Review from "./components/Review";

function App() {
  return (
    <div className="">
      <Navbar />
      <main>
        <Hero />
      </main>
      {/* gallery */}
      <section>
        <Gallery />
      </section>
      {/* review */}
      <section>
        <Review />
      </section>
    </div>
  );
}

export default App;
