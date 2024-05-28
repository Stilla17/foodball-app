import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <section className="max-w-[1456px] w-[100%] mx-auto my-[25px]">
          <div className="wrapper flex gap-[24px]">
            <div className="wrap-left">
              <img src="src/assets/images/Card.svg" alt="" />
            </div>
            <div className="wrap-right">
              <div className="card w-[301px] bg-white rounded-2xl h-[356px]">
                <p className="text-center pt-[27px] font-semibold">
                  Live Match{" "}
                </p>
                <p className="text-[#096A00] text-center font-medium">
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
                      <img src="src/assets/images/shoot.svg" alt="" />
                    </div>
                    <div className="card2">
                      <p className="text-[#560617] font-semibold pb-[6px] text-end">
                        3
                      </p>
                      <img src="src/assets/images/enemy.svg" alt="" />
                    </div>
                  </div>
                  
                  <p className="text-center font-medium text-[14px] pt-[16px]">
                    Shoot
                  </p>
                  <div className="flexx flex mx-auto justify-center gap-[9px]">
                    <div className="card1">
                      <p className="text-[#5742A9] font-semibold pb-[6px]">7</p>
                      <img src="src/assets/images/shoot.svg" alt="" />
                    </div>
                    <div className="card2">
                      <p className="text-[#560617] font-semibold pb-[6px] text-end">
                        3
                      </p>
                      <img src="src/assets/images/enemy.svg" alt="" />
                    </div>
                  </div>
                  <p className="text-center font-medium text-[14px] pt-[10px]">
                    Fouls
                  </p>
                  <div className="flexx flex mx-auto justify-center gap-[9px]">
                    <div className="card1">
                      <p className="text-[#5742A9] font-semibold pb-[6px]">7</p>
                      <img src="src/assets/images/shoot.svg" alt="" />
                    </div>
                    <div className="card2">
                      <p className="text-[#560617] font-semibold pb-[6px] text-end">
                        3
                      </p>
                      <img src="src/assets/images/enemy.svg" alt="" />
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
