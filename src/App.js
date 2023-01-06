import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import Navigation from "./components/Navigation";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import RoadMap from "./components/sections/Roadmap";
import Showcase from "./components/sections/Showcase";
import Faq from "./components/sections/Faq";
import Footer from "./components/Footer";
import Team from "./components/sections/Team";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <RoadMap />
        <Showcase />
        <Team />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
};

export default App;
