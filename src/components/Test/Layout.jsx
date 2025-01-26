import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { Menu } from "lucide-react";
import NirmanButton from "../NirmanButton/NirmanButton";

function Layout() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Prevent scrolling on the body when the sidebar is open
  useEffect(() => {
    if (isMobile && isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobile, isSidebarOpen]);

  return (
    <div className="flex min-h-screen bg-white dark:bg-black dark:text-white">
      {/* Sidebar */}
      <Sidebar
        isMobile={isMobile}
        isOpen={isSidebarOpen}
        onToggle={toggleSidebar}
        onClose={() => setIsSidebarOpen(false)} // Pass a function to close the sidebar
        className={`${
          isMobile
            ? "fixed top-0 right-0 transform transition-transform duration-300 ease-in-out z-20"
            : "sticky top-0 left-0"
        } w-64 bg-white border dark:bg-gray-800 p-4 shadow-lg max-md:static max-md:w-auto`}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col max-w-full overflow-hidden">
        {isMobile && (
          <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex items-center">
            {/* NirmanButton on the leftmost */}
            <NirmanButton />

            {/* Menu button on the right */}
            <button
              onClick={toggleSidebar}
              className="ml-auto text-gray-600 dark:text-gray-200"
            >
              <Menu size={24} />
            </button>
          </header>
        )}

        <main className="flex-1 overflow-y-auto p-6 max-w-full">
          <Outlet />
        </main>
      </div>

      {/* Overlay for closing the sidebar when clicking outside */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default Layout;
