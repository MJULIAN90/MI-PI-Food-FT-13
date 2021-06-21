import React from "react";
import { Link } from "react-router-dom";
import img from "../../Images/logo2.png";
import "./Home.css";
function Home() {
  return (
    <div className="Home">
      <Link to="/home">
        <img
          className="imagen"
          src={img}
          alt="error cargando"
          width="200"
          height="200"
        />
      </Link>
    </div>
  );
}

export default Home;
