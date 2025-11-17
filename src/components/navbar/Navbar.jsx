import React from "react";
import { NavHamburger } from "./NavHamburger";

export const Navbar = () => {
  return (
    <>
      <div className="w-full h-[3.75rem] px-2.5 md:px-4 py-3 flex-shrink-0 flex items-center justify-between gap-4 border-b-2 md:border-b-0 border-gray-200 bg-white">
              {/* Logo and Hamburger */}
<div className="flex flex-shrink-0 items-center gap-2.5">
          <NavHamburger />
          <img
            src="/svgs/brand-logo/logo-trazi.svg"
            alt="logo"
            width="125"
            className="flex-shrink-0"
            loading="lazy"
          />
        </div>

      </div>
    </>
  );
};
