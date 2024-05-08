import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import './navbar.css';

export default function Navbar() {
  return (
    <div>
      <button>
        <Link className="nav_link" to="/search">Gerichte finden</Link>
      </button>
      <Outlet />
    </div>
  );
}
