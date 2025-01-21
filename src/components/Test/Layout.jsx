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

  return (
    <div className="flex min-h-screen bg-white dark:bg-black dark:text-white">
      {/* Sidebar */}
      <Sidebar
        isMobile={isMobile}
        isOpen={isSidebarOpen}
        onToggle={toggleSidebar}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {isMobile && (
          <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex items-center">
            <button
              onClick={toggleSidebar}
              className="mr-4 text-gray-600 dark:text-gray-200"
            >
              <Menu size={24} />
            </button>

            {/* NirmanButton is shown only on mobile */}
            {isMobile && <NirmanButton />}
          </header>
        )}

        <main className="flex-1 overflow-x-hidden overflow-y-auto  p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
