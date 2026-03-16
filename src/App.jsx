import React from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Hero from "./components/Hero";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Works from "./components/works";
import { SplitText } from "gsap/all";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Clients from "./components/Clients";
import { Draggable } from "gsap/all";
import Dribble from "./components/Dribble";
import Social from "./components/Social";
import Footer from "./components/Footer";
gsap.registerPlugin(ScrollTrigger, SplitText, Draggable);

function App() {
  return (
    <ThemeProvider>
      <main className="container mx-auto px-2 sm:px-0 overflow-x-hidden sm:overflow-x-visible">
        <Navbar />
        <Hero />
        <div className="h-[750px] hidden sm:block"></div>
        <Works />
        <About />
        <Achievements />
        <Clients />
        <Dribble />
        <Social />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
