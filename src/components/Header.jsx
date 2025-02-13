import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Link to="/" className="header">
      <img src={logoSpotify} alt="Logo do Spotify" />

      <Link to="/" className="header__link" >
        <h1>Spotify</h1>
      </Link>
    </Link>
  );
};