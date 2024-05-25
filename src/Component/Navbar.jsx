import React from "react";

function Navbar() {
  return (
    <>
      <div>
        <div className="w-[72px] border-[3px] navbar-box h-[1012px]">
          <div className="flex flex-col mx-auto images">
            <img
              className="w-[18px]"
              src="src/assets/icons/menu (2).svg"
              alt=""
            />
            <img
              className="w-[18px]"
              src="src/assets/icons/fire (2).svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
