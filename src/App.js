import React, { useState } from "react";
import { Navbar, Hero, Dropdown, InfoSection } from "./components";
import { Switch } from "react-router-dom";
import { GlobalStyles } from "./globalStyle";
import { InfoData } from "./data/InfoData";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  console.log(InfoData);
  return (
    <>
      <GlobalStyles />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <InfoSection />
    </>
  );
};

export default App;
