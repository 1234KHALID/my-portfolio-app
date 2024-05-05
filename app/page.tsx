"use client";
import MobileNavbar from "@/components/mobile-navbar";
import Navbar from "@/components/navbar";
import React, { useState } from "react";

const HomePage = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const handleOpenNav = () => {
    setShowNav(true);
  };

  const handleCloseNav = () => {
    setShowNav(false);
  };

  return (
    <div>
      <MobileNavbar showNav={showNav} onClose={handleCloseNav} />
      <Navbar onOpen={handleOpenNav} />
    </div>
  );
};

export default HomePage;
