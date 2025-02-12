import React, { useState } from "react";
import Navigation from "./Navigation";
import AuthButtons from "./AuthButtons";
import NirmanButton from "../NirmanButton/NirmanButton";
import { Menu, X } from "lucide-react"; // Icons for the menu

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="px-6 py-4 text-sm font-medium bg-white md:px-12">
        {/* Nirman Button */}
        <div className="flex justify-between items-center">
          <NirmanButton />
          <nav className="hidden lg:flex gap-5 mt-0">
            <Navigation />
          </nav>

          {/* Mobile Menu Button (For AuthButtons) */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex">
            <AuthButtons />
          </div>
        </div>

        {/* Mobile Navigation (Below Nirman Button) */}
        <div className="mt-4 lg:hidden">
          <Navigation />
        </div>

        {/* Desktop Navigation (Inline) */}
      </header>

      {/* Mobile Menu (Only Auth Buttons) */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-5 bg-white shadow-md p-3 rounded-lg">
          <AuthButtons />
        </div>
      )}

      {/* Page Content */}
      <div className="text-center px-4 md:px-0">
        <p>For other webpages</p>
        <p>Click on my test to directly login</p>
      </div>
    </>
  );
}

export default HomePage;
