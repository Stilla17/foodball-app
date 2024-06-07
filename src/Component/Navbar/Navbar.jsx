import React, { useState, useEffect } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <header>
        <nav className="flex max-w-[1456px] py-[16px] w-[100%] mx-auto items-center justify-between">
          <div className="relative flex items-center">
            <input
              className={`inputs outline-none rounded-[6px] py-[10px] px-[32px] w-[548px] ${darkMode ? "text-white bg-gray-800" : "bg-[#E6E6E6] text-black"
                } transition duration-300 ease-in-out`}
              type="text"
              placeholder="Type or search..."
            />
          </div>
          <div className="nav-left">
            <div className="flex gap-[24px] items-center">
              <button className="w-[114px] h-[33px] bg-[#5742A9] text-white rounded-[6px] font-semibold">
                Go premium
              </button>
              <img
                className="cursor-pointer"
                src="src/assets/icons/shop.svg"
                alt="Shop Icon"
              />
              <img
                className="cursor-pointer"
                src="src/assets/icons/zil.svg"
                alt="Zil Icon"
              />
              <div
                className="relative cursor-pointer transition-[0.8s]"
                onClick={toggleTheme}
              >
                {darkMode ? (
                  <img
                    className="w-[30px] h-[44px]"
                    src="src/assets/icons/dark.png"
                    alt="Dark Mode Icon"
                  />
                ) : (
                  <img
                    className="w-[30px] h-[44px]"
                    src="src/assets/icons/light.png"
                    alt="Light Mode Icon"
                  />
                )}
              </div>
              <div className="relative">
                <img
                  className="cursor-pointer"
                  src="src/assets/icons/avatar-girl.svg"
                  alt="Avatar"
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
