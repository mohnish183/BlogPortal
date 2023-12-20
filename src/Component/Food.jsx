import React from "react";
import { StoreData } from "../Store/Store";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../ComponentUI/Hollywood.css";
function Food() {
  let hollywoodData = useContext(StoreData);

  return (
    <>
      <div className="hollywood-container">
        <h2>Food</h2>
        <div className="flex-1">
          {hollywoodData.newsData
            .filter((item, index) => item.category === "Food" && index < 66)
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
                  <div className="flex-2">
                    <h3>Top Headline</h3>
                    {hollywoodData.newsData
                      .filter(
                        (item, index) => item.category === "Food" && index > 65
                      )
                      .map((item, index) => {
                        return (
                          <>
                            <div className="item-2">
                              <img src={item.image} alt="not found" />
                              <div className="content-flex-2">
                                <h3 className="title">
                                  {item.title.split(/(\s+)/).slice(0, 20)}...
                                </h3>
                                <p>
                                  {item.description.split(/(\s+)/).slice(0, 40)}
                                  ...
                                </p>
                                <NavLink to={`/detail/${item.id}`}>
                                  Click Here...
                                </NavLink>
                              </div>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Food;
