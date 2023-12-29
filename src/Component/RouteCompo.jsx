import React from "react";
import "../ComponentUI/RouteCompo.css";
import Home from "./Home";
import Bollywood from "./Bollywood";
import Food from "./Food";
import Hollywood from "./Hollywood";
import Technology from "./Technology";
import Fitness from "./Fitness";
import Store from "../Store/Store";
import { NavLink, BrowserRouter, Route, Routes } from "react-router-dom";
import DynamicCompo from "./DynamicCompo";
import siren from "../Image/theSiren.png";
function RouteCompo() {
  var navBar = document.getElementsByClassName("nav-bar");
  var childNode;

  let toggleValue = true;
  const toggleMenu = () => {
    if (toggleValue === true) {
      navBar[0].classList.add("childnodeOn");

      console.log("red");
      navBar[0].classList.remove("childnodeOff");
      childNode = navBar[0].children;
      for (var i = 0; i < childNode.length; i++) {
        childNode[i].classList.add("childNodeDisplay");
        childNode[i].classList.remove("childNode");
      }
      toggleValue = false;
    } else {
      navBar[0].classList.remove("childnodeOn");
      navBar[0].classList.add("childnodeOff");
      childNode = navBar[0].children;
      for (i = 0; i < childNode.length; i++) {
        childNode[i].classList.add("childNode");
        childNode[i].classList.remove("childNodeDisplay");
      }
      toggleValue = true;
    }
  };
  window.addEventListener("resize", (e) => {
    if (window.matchMedia(`(min-width: 600px)`).matches) {
      navBar[0].classList.remove("childnodeOff");
      navBar[0].classList.remove("childnodeOn");
      childNode = navBar[0].children;
      for (var i = 0; i < childNode.length; i++) {
        childNode[i].classList.remove("childNode");
        childNode[i].classList.remove("childNodeDisplay");
      }
    }
    if (window.matchMedia(`(max-width:600px)`).matches) {
      navBar[0].classList.add("childnodeOff");
    }
  });
  return (
    <>
      <div className="navbar-img">
        <img src={siren} alt="" />
      </div>

      <BrowserRouter>
        <div className="icon">
          <i className="fa fa-bars" onClick={toggleMenu}></i>
        </div>

        <div className="nav-bar">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/bollywood"}>Bollywood</NavLink>
          <NavLink to={"/hollywood"}>Hollywood</NavLink>
          <NavLink to={"/food"}>Food</NavLink>
          <NavLink to={"/technology"}>Technology</NavLink>
          <NavLink to={"/fitness"}>Fitness</NavLink>
        </div>

        <Store>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bollywood" element={<Bollywood />} />

            <Route path="/hollywood" element={<Hollywood />} />
            <Route path="/food" element={<Food />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/detail/:id" element={<DynamicCompo />} />
          </Routes>
        </Store>
      </BrowserRouter>
    </>
  );
}

export default RouteCompo;
