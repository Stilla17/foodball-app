import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner/Banner";

function Navbar() {
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);
  const navigate = useNavigate();

  const toggleLogout = () => {
    setIsLogoutVisible(!isLogoutVisible);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <header>
        <nav className="flex max-w-[1456px] my-[16px] w-[100%] mx-auto items-center justify-between">
          <div className="input">
            <img
              className="search"
              src="src/assets/icons/Vector (4).svg"
              alt=""
            />
            <input
              className="inputs outline-none rounded-[6px] w-[548px] border-2 p-[42px] pt-[11px] pb-[11px] bg-[#E6E6E6]"
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
                alt=""
              />
              <img
                className="cursor-pointer"
                src="src/assets/icons/zil.svg"
                alt=""
              />
              <img
                className="cursor-pointer"
                src="src/assets/icons/modes.svg"
                alt=""
              />
              <div className="relative">
                <img
                  className="cursor-pointer"
                  src="src/assets/icons/avatar-girl.svg"
                  alt="Avatar"
                  onClick={toggleLogout}
                />
                {isLogoutVisible && (
                  <button
                    className="absolute right-0 mt-2 w-[80px] h-[35px] bg-[#5742A9] text-white rounded-[6px] font-semibold"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <hr className="" />
      <main className="bg-[#E8E8E6]">
        <Banner />
      </main>
    </>
  );
}

export default Navbar;
