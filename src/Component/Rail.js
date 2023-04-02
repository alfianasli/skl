import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import recipedia from "../Aset/recipedia.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rail = () => {
  return (
    <div className="sidebar fixed ">
      <div className="resto">
        <img className="budi" src={recipedia} alt="gambar" />
      </div>
      <div className="menu mt-8 ml-5 ">
        <Link to={`/home`} className="py-3">
          <span className="icon">
            <i class="fa-solid fa-house text-2xl"></i>
          </span>
          Home
        </Link>

        <Link to={`/search`} className="py-3">
          <span>
            <i class="fa-solid fa-magnifying-glass w-10 text-2xl"></i>
          </span>
          Search
        </Link>

        <Link to={`/profile`} className="py-3">
          <span>
            <i class="fa-solid fa-circle-user w-10 text-2xl"></i>
          </span>
          Profile
        </Link>
        <Link to={`/contact`} className="py-3">
          <span>
            <i class="fa-regular fa-message-question w-10 text-2xl"></i>
          </span>
          Contact me
        </Link>
        <a href="#" className="text-2xl py-72">
          <span>
            <i class="fa-solid fa-right-from-bracket w-10 text-2xl"></i>
          </span>
          Log Out
        </a>
      </div>
    </div>
  );
};

export default Rail;
