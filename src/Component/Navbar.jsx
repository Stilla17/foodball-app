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
              className={`inputs outline-none rounded-[6px] py-[10px] px-[32px] w-[548px] ${
                darkMode ? "text-white bg-gray-800" : "bg-[#E6E6E6] text-black"
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
      <hr />
      <main className={`main-content ${darkMode ? "dark-mode" : "light-mode"}`}>
        <section className="max-w-[1456px] w-[100%] mx-auto my-[25px]">
          <div className="wrapper flex gap-[24px]">
            <div className="wrap-left">
              <img src="src/assets/images/Card.svg" alt="Card Image" />
            </div>
            <div className="wrap-right">
              <div
                className={`card w-[301px] rounded-2xl h-[356px] ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                }`}
              >
                <p className="text-center pt-[27px] font-semibold">
                  Live Match
                </p>
                <p
                  className={`text-${
                    darkMode ? "#fff" : "#096A00"
                  } text-center font-medium`}
                >
                  62 : 24
                </p>
                <div className="score rounded-[50px] bg-[#5742A91A] w-[81px] h-[38px] mx-auto my-[20px]">
                  <p className="text-center my-auto w-[40px] mx-auto text-[18px] font-semibold pt-[6px] text-[#5742A9]">
                    2 - 2
                  </p>
                </div>
                <div className="dest">
                  <p className="text-center font-medium text-[14px]">
                    Shoot on Target
                  </p>
                  <div className="flexx flex mx-auto justify-center gap-[9px]">
                    <div className="card1">
                      <p className="text-[#5742A9] font-semibold pb-[6px]">7</p>
                      <img src="src/assets/images/shoot.svg" alt="Shoot Icon" />
                    </div>
                    <div className="card2">
                      <p className="text-[#560617] font-semibold pb-[6px] text-end">
                        3
                      </p>
                      <img src="src/assets/images/enemy.svg" alt="Enemy Icon" />
                    </div>
                  </div>

                  <p className="text-center font-medium text-[14px] pt-[16px]">
                    Shoot
                  </p>
                  <div className="flexx flex mx-auto justify-center gap-[9px]">
                    <div className="card1">
                      <p className="text-[#5742A9] font-semibold pb-[6px]">7</p>
                      <img src="src/assets/images/shoot.svg" alt="Shoot Icon" />
                    </div>
                    <div className="card2">
                      <p className="text-[#560617] font-semibold pb-[6px] text-end">
                        3
                      </p>
                      <img src="src/assets/images/enemy.svg" alt="Enemy Icon" />
                    </div>
                  </div>
                  <p className="text-center font-medium text-[14px] pt-[10px]">
                    Fouls
                  </p>
                  <div className="flexx flex mx-auto justify-center gap-[9px]">
                    <div className="card1">
                      <p className="text-[#5742A9] font-semibold pb-[6px]">7</p>
                      <img src="src/assets/images/shoot.svg" alt="Shoot Icon" />
                    </div>
                    <div className="card2">
                      <p className="text-[#560617] font-semibold pb-[6px] text-end">
                        3
                      </p>
                      <img src="src/assets/images/enemy.svg" alt="Enemy Icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Navbar;
