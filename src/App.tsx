import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Review from "./components/Review";
import Services from "./components/Services";
import InfoSection from "./components/InfoSection";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="px-5">
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
        {/* services */}
        <section>
          <Services />
        </section>
        {/* footer info */}
        <footer>
          <InfoSection />
        </footer>
      </div>
    </div>
  );
}

export default App;
