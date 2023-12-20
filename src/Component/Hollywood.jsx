import React from "react";
import { StoreData } from "../Store/Store";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../ComponentUI/Hollywood.css";
function Hollywood() {
  let hollywoodData = useContext(StoreData);
  console.log(hollywoodData.newsData);
  return (
    <>
      <div className="hollywood-container">
        <h2>Hollywood</h2>
        <div className="flex-1">
          {hollywoodData.newsData
            .filter(
              (item, index) =>
                item.category === "Holly" && index < 26 && index > 15
            )
            .map((item, index) => {
              return (
                <>
                  <div className="item">
                    <img src={item.image} alt="not found" />
                    <div className="content-flex">
                      <h3 className="title">
                        {item.title.split(/(\s+)/).slice(0, 20)}...
                      </h3>
                      <p>{item.description.split(/(\s+)/).slice(0, 40)}...</p>
                      <NavLink to={`/detail/${item.id}`}>Click Here...</NavLink>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div className="flex-2">
          <h3>Top Headline</h3>
          {hollywoodData.newsData
            .filter((item, index) => item.category === "Holly" && index > 25)
            .map((item, index) => {
              return (
                <>
                  <div className="item-2">
                    <img src={item.image} alt="not found" />
                    <div className="content-flex-2">
                      <h3 className="title">
                        {item.title.split(/(\s+)/).slice(0, 20)}...
                      </h3>
                      <p>{item.description.split(/(\s+)/).slice(0, 40)}...</p>
                      <NavLink to={`/detail/${item.id}`}>Click Here...</NavLink>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Hollywood;
