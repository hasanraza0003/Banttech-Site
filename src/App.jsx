import React from "react";
import Navbar from "./components/Navbar";
import TopSection from "./components/TopSection";
import Footer from "./components/Footer";
import { Home } from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <TopSection />
      <Home />
      <Footer />
    </>
  );
};

export default App;
