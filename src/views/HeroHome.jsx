import React from "react";
import NavbarHero from "../components/NavbarHero";
import WelcomeHero from "../components/WelcomeHero";

const HeroHome = () => {
  return (
    <div className="gradient-background w-full h-full rounded-lg mt-2">
      <NavbarHero />
      <div>
        <WelcomeHero/>
      </div>
    </div>
  );
};

export default HeroHome;
