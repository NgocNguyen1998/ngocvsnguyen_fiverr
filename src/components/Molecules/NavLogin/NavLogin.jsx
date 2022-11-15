import React from "react";
import { NavLink } from "react-router-dom";

export const NavLogin = () => {
  return (
    <div className="flex text-[18px] gap-5  items-center font-semibold">
      <NavLink className="text-gray-500" to="/">
        Become a Seller
      </NavLink>
      <NavLink className="text-gray-500" to="/">
        Sign In
      </NavLink>
      <button
        className="text-green-500 font-bold border-green-300 rounded-md border-2 px-5 py-1"
        to="/"
      >
        Join
      </button>
    </div>
  );
};
